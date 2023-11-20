<template>
  <div class="ex-table" v-loading="loading">
    <el-table ref="tableRef" :data="processTableData" :row-key="rowKey" :border="customTable.border"
      :size="customTable.size" :stripe="customTable.stripe" @selection-change="selectionChange" v-bind="attrs">
      <template v-for="item in tableTypeColumns" :key="item">
        <!-- selection || radio || index || expand -->
        <el-table-column v-bind="item" :align="item.align ?? 'center'" :reserve-selection="item.type === 'selection'">
          <template #default="scope">
            <!-- expand -->
            <template v-if="item.type === 'expand'">
              <!-- <component :is="item.render" v-bind="scope" v-if="item.render" /> -->
              <slot :name="item.type" v-bind="scope" />
            </template>
            <!-- radio -->
            <el-radio v-if="item.type === 'radio'" v-model="radio" :label="scope.row[rowKey]">
              <i></i>
            </el-radio>
          </template>
        </el-table-column>
      </template>
      <template v-for="item in tableNormalColumns" :key="item">
        <el-table-column v-bind="item" v-if="item.isShow">
          <template #default="scope">
            <slot :name="item.prop" v-bind="scope">
              {{ item.prop ? scope.row[item.prop] : null }}
            </slot>
          </template>
        </el-table-column>
      </template>
      <slot />
      <el-table-column min-width="1" />
      <template #append>
        <slot name="append" />
      </template>
      <template #empty>
        <el-empty :description="emptyText"></el-empty>
      </template>
    </el-table>
    <div class="ex-table-pagination">
      <div class="ex-table-pagination__left">
        <el-pagination :background="innerPageConfig.background" :small="innerPageConfig.small"
          :layout="innerPageConfig.layout" v-model:current-page="pageControl.pageNum" :total="total"
          :page-size="pageControl.pageSize" :page-sizes="innerPageConfig.pageSizes"
          :hide-on-single-page="innerPageConfig.hideOnSinglePage" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div>
      <div class="ex-table-pagination__right">
        <el-popover placement="top" :width="220" trigger="click">
          <template #reference>
            <el-button circle :icon="Setting"></el-button>
          </template>
          <template #default>
            <div class="ex-table-pagination__custom">
              <div class="custom-label">表格尺寸:</div>
              <div class="custom-field">
                <el-radio-group v-model="customTable.size" size="small" @change="onTableSizeChange">
                  <el-radio-button v-for=" item  in  tableSizeOptions " :label="item.value">{{ item.label
                  }}</el-radio-button>
                </el-radio-group>
              </div>
              <div class="custom-label">斑马纹:</div>
              <div class="custom-field">
                <el-switch v-model="customTable.stripe"></el-switch>
              </div>
              <div class="custom-label">边框:</div>
              <div class="custom-field">
                <el-switch v-model="customTable.border"></el-switch>
              </div>
            </div>
          </template>
        </el-popover>
        <el-button v-if="showColumnSettingInner" circle :icon="Operation" @click="openColumnSetting">
        </el-button>
        <el-button circle :icon="Refresh" @click="refresh"></el-button>
      </div>
    </div>
  </div>
  <ColumnSetting v-if="showColumnSettingInner" ref="columnSettingRef" v-model:columns="tableNormalColumns">
  </ColumnSetting>
</template>
<script setup lang="ts" generic="T extends Record<string, unknown>">
import { ref, computed, defineOptions, onMounted, onActivated, onDeactivated, useAttrs, watchEffect, nextTick, provide, Ref } from 'vue'
import { ElTable } from 'element-plus'
import { Refresh, Operation, Setting } from '@element-plus/icons-vue'
import { ColumnsProps, ColumnType, PageProps, TableSize, PageParamsProps, ResponseDataProps } from './index'
import ColumnSetting from './components/ColumnSetting.vue'
import { useTableSelection } from './hooks/useTableSelection'
import storage from '../../utils/storage'

defineOptions({
  name: 'ExTable'
})

interface Props {
  /**
   * 表格数据（可选）如果传入该参数，则不会请求接口
   */
  data?: T[];
  /**
   * 表格列（可选）
   * 当需要使用自定义列设置时，必须传入该参数
   * 注意：该参数必须是响应式的，否则自定义列设置无法生效
   * 注意：操作列不要传入
   */
  columns?: ColumnsProps[];
  /**
   * 请求接口
   * 分页表格要求接口返回数据格式为
   * {
   * rows: [],
   * total: 0
   * }
   */
  requestApi?: (params: any) => Promise<ResponseDataProps<T>>;
  /**
 * 初始请求参数（可选）
 * 如果未传入, 在搜索/重置时需要传入dynamicParams
 */
  requestParams?: any;
  /**
   * 是否自动请求接口，默认不自动请求
   * 如果开启自动请求，最好传入requestParams
   */
  requestAuto?: boolean;
  /**
   * 请求接口返回数据处理函数
   * 如果返回的数据格式不是标准rows，total格式，可以通过该函数处理
   */
  responseDataHandler?: (response: any) => ResponseDataProps<T>;
  isPage?: boolean;
  pageParams?: PageParamsProps;
  border?: boolean;
  stripe?: boolean;
  rowKey?: string;
  size?: TableSize;
  emptyText?: string;
  tableName?: string;
  pageConfig?: PageProps
  /**
   * 是否开启自定义列设置
   */
  showColumnSetting?: boolean
}

const props = withDefaults(
  defineProps<Props>(), {
  data: () => [],
  columns: () => [],
  rowKey: 'id',
  requestAuto: false,
  isPage: true,
  pageParams: () => ({
    pageNum: 'pageNum',
    pageSize: 'pageSize',
    initPageNum: 1,
    initPageSize: 10
  }),
  showColumnSetting: false,
  border: false,
  stripe: false,
  size: 'default',
  emptyText: '暂无数据',
  tableName: 'ExTable',
  pageConfig: () => ({
    layout: 'total, sizes, prev, pager, next, jumper',
    pageSizes: [10, 25, 50, 100],
    hideOnSinglePage: false,
    background: true,
    small: false
  })
}
)

provide('TableName', props.tableName)

// 初始分页数据
// const initPageControl = {
//   pageNum: 1,
//   pageSize: 10
// }

const initPageParams = {
  [`${props.pageParams.pageNum}`]: props.pageParams.initPageNum,
  [`${props.pageParams.pageSize}`]: props.pageParams.initPageSize
}

// column 列类型
const columnTypes: ColumnType[] = ['selection', 'radio', 'index', 'expand']

// table 尺寸选项
const tableSizeOptions = [
  {
    label: '默认',
    value: 'default',
  },
  {
    label: '缩小',
    value: 'small',
  },
  {
    label: '放大',
    value: 'large',
  }
]

const attrs = useAttrs()

const tableRef = ref<InstanceType<typeof ElTable> | null>(null)

const tableInnerColumns = ref<ColumnsProps[]>(props.columns)

// 表格列 - 处理isShow为undefined的情况
const tableColumns = computed(() => {
  return tableInnerColumns.value.map((item) => {
    if (item.isShow === undefined) {
      return {
        ...item,
        isShow: true
      }
    }
    return item
  })
})

// 表格列 - 带有type属性的列
const tableTypeColumns = ref<ColumnsProps[]>([])

// 表格列 - 普通数据列
const tableNormalColumns = ref<ColumnsProps[]>([])

watchEffect(() => {
  tableTypeColumns.value = tableColumns.value.filter((item) => columnTypes.includes(item?.type as ColumnType))
  tableNormalColumns.value = tableColumns.value.filter((item) => !columnTypes.includes(item?.type as ColumnType))
})

// 请求参数
const tableParams = ref({})

// 表格数据
const tableData = ref<T[]>([]) as Ref<T[]>

// 处理表格数据
const processTableData = computed(() => {
  if (!props.data) return tableData.value
  return props.data.slice(
    (pageControl.value[props.pageParams.pageNum] - 1) * pageControl.value[props.pageParams.pageSize],
    pageControl.value[props.pageParams.pageSize] * pageControl.value[props.pageParams.pageNum]
  )
})

// 加载状态
const loading = ref(false)

// 滚动条高度
const scrollTop = ref(0)

// 总条数
const total = ref(0)

// 单选值
const radio = ref('')

// 表格多选hook
const { isSelected, selected, selectedIds, selectionChange } = useTableSelection(props.rowKey)

// 获取数据
const getData = async (dynamicParams = {}) => {
  if (!props.requestApi || props.data) {
    return
  }
  try {
    loading.value = true
    Object.assign(tableParams.value, props.requestParams, dynamicParams, props.isPage ? pageControl.value : {})
    if (props.responseDataHandler && typeof props.responseDataHandler === 'function') {
      const res = await props.requestApi(tableParams.value)
      const { rows, total: rowsTotal } = props.responseDataHandler(res)
      tableData.value = rows
      total.value = rowsTotal || rows.length
    } else {
      const res = await props.requestApi(tableParams.value)
      const { rows, total: rowsTotal } = res
      tableData.value = rows
      total.value = rowsTotal || rows.length
    }
    loading.value = false
  } catch (error) {
    console.log(error)
    loading.value = false
  }
}

onMounted(() => {
  !props.isPage && (innerPageConfig.value.layout = 'total')
  props.requestAuto && getData()
  props.data && Array.isArray(props.data) && (total.value = props.data.length)
  props.showColumnSetting && getColumnsFromSession()
})

// ---------- 滚动条控制 只有页面符合keep-alive条件时才会生效 ----------
// 组件所在页面keep-alive并且被激活时，滚动条回到上次滚动的位置
onActivated(() => {
  const scrollEl = tableRef.value?.$el.querySelector('.el-scrollbar__wrap')
  if (scrollEl && scrollTop.value) {
    nextTick(() => {
      tableRef.value?.setScrollTop(scrollTop.value)
    })
  }
})

// 组件所在页面keep-alive且未激活时，记录滚动条位置
onDeactivated(() => {
  const scrollEl = tableRef.value?.$el.querySelector('.el-scrollbar__wrap')
  if (scrollEl) {
    scrollTop.value = scrollEl.scrollTop
  }
})

// ---------- 分页控制 ----------
const innerPageConfig = ref(props.pageConfig)

const pageControl = ref({
  ...initPageParams
})

const handleSizeChange = (val: number) => {
  pageControl.value[props.pageParams.pageSize] = val
  pageControl.value[props.pageParams.pageNum] = initPageParams[props.pageParams.pageNum]
}

const handleCurrentChange = () => {
  getData()
}

// ---------- 自定义表格控制 可以控制表格尺寸 斑马纹 边框 ----------
const customTable = ref({
  size: props.size || 'default',
  stripe: props.stripe ?? false,
  border: props.border ?? false
})

const onTableSizeChange = () => {
  doLayout()
}

// ---------- 自定义表格列设置 ----------
const showColumnSettingInner = ref(props.showColumnSetting)

const columnSettingRef = ref<InstanceType<typeof ColumnSetting> | null>(null)

const openColumnSetting = () => {
  showColumnSettingInner.value = true
  nextTick(() => {
    columnSettingRef.value?.open()
  })
}

const getColumnsFromSession = () => {
  const columnsFromSession = storage.getSession(`columns-${props.tableName}`)
  if (columnsFromSession && Array.isArray(columnsFromSession) && columnsFromSession.length > 0) {
    tableNormalColumns.value = columnsFromSession
  }
}

// ---------- 暴露方法 ----------
/**
 * 刷新表格 不改变现有参数
 */
const refresh = () => {
  clearSelection()
  getData()
}

/**
 * 重置表格 重置参数
 * @param {any} dynamicParams 
 */
const reload = (dynamicParams: any = {}) => {
  pageControl.value[props.pageParams.pageNum] = initPageParams[props.pageParams.pageNum]
  pageControl.value[props.pageParams.pageSize] = initPageParams[props.pageParams.pageSize]
  tableParams.value = props.requestParams
  clearSelection()
  clearSort()
  clearFilter()
  getData(dynamicParams)
}

/**
 * 搜索 插入参数
 * @param {any} dynamicParams 
 */
const search = (dynamicParams: any = {}) => {
  pageControl.value[props.pageParams.pageNum] = initPageParams[props.pageParams.pageNum]
  clearSelection()
  getData(dynamicParams)
}

/**
 * 在指定位置插入数据
 * @param {object} data 
 * @param {number} index 
 */
const insertRow = (data: never, index: number) => {
  tableData.value.splice(index, 0, data)
}

/**
 * 根据id获取指定行
 * @param {*} id 
 */
const getRowById = (id: string | number, idKey?: string) => {
  return tableData.value.find((item) => item[idKey ? idKey : props.rowKey] === id) || null
}

/**
 * 根据id更新指定行
 * @param {object} data 
 * @param {string | number} id 
 */
const updateRowById = (data: never, id: string | number, idKey?: string) => {
  const index = tableData.value.findIndex((item) => item[idKey ? idKey : props.rowKey] === id)
  if (index === -1) return
  tableData.value.splice(index, 1, data)
}

/**
 * 根据id删除指定行
 * @param {string | number} id 
 */
const deleteRowById = (id: string | number, idKey?: string) => {
  tableData.value = tableData.value.filter((item) => item[idKey ? idKey : props.rowKey] !== id)
}

/**
 * 根据索引删除指定行
 * @param {number} index 
 */
const deleteRowByIndex = (index: number) => {
  tableData.value.splice(index, 1)
}

const clearSelection = () => {
  tableRef.value?.clearSelection()
}

const clearSort = () => {
  tableRef.value?.clearSort()
}

const clearFilter = (columnKeys?: any[]) => {
  tableRef.value?.clearFilter(columnKeys)
}

const doLayout = () => {
  tableRef.value?.doLayout()
}

defineExpose({
  el: tableRef,
  tableParams,
  tableData: processTableData,
  radio,
  isSelected,
  selected,
  selectedIds,
  getData,
  refresh,
  reload,
  search,
  insertRow,
  getRowById,
  updateRowById,
  deleteRowById,
  deleteRowByIndex,
  clearSelection,
  clearSort,
  clearFilter
})
</script>
<style lang="scss" scoped>
.ex-table {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.el-table {
  flex: 1;

  table {
    width: 100%;
  }
}

.ex-table-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  flex-wrap: wrap;

  .ex-table-pagination__right {
    white-space: nowrap;
  }
}

.custom-field {
  margin-bottom: 10px;
}
</style>
