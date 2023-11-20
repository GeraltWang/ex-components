<template>
  <el-drawer v-model="visible" title="列设置" size="500">
    <el-container>
      <el-main>
        <el-table :data="columns" row-key="prop">
          <el-table-column prop="label" align="center" label="列名" />
          <el-table-column v-slot="scope" prop="isShow" align="center" label="显示">
            <el-switch v-model="scope.row.isShow"></el-switch>
          </el-table-column>
          <el-table-column v-slot="scope" prop="sortable" align="center" label="排序">
            <el-switch v-model="scope.row.sortable"></el-switch>
          </el-table-column>
          <el-table-column v-slot="scope" prop="fixed" align="center" label="固定">
            <el-select v-model="scope.row.fixed" @change="handleFixedChange($event, scope.$index)">
              <el-option v-for="item in fixedOptions" :key="item.value" :value="item.value" :label="item.label" />
            </el-select>
          </el-table-column>
          <template #empty>
            <el-empty description="暂无可配置列" />
          </template>
        </el-table>
      </el-main>
      <el-footer>
        <div class="footer-wrap">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="save">保存</el-button>
        </div>
      </el-footer>
    </el-container>
  </el-drawer>
</template>
<script setup lang="ts">
import { ref, inject } from 'vue'
import { ColumnsProps, ColumnFixedType } from '../index'
import storage from '../../../utils/storage'
import './columnSetting.scss'

interface Props {
  columns: ColumnsProps[]
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => []
})

const emits = defineEmits<{
  'update:columns': [columns: ColumnsProps[]] // 具名元组语法
}>()

const fixedOptions = [
  {
    label: '不固定',
    value: ''
  },
  {
    label: '左固定',
    value: 'left'
  },
  {
    label: '右固定',
    value: 'right'
  }
]

const tableName = inject('TableName')

const visible = ref(false)

const open = () => {
  visible.value = true
}

const handleFixedChange = (val: ColumnFixedType, index: number) => {
  if (val === '') {
    const columnsCopy = props.columns
    delete columnsCopy[index].fixed
    emits('update:columns', columnsCopy)
    return
  }
}

const save = () => {
  storage.setSession(`columns-${tableName}`, props.columns)
  visible.value = false
  ElNotification.success({
    title: '保存成功',
    message: '自定义列设置已缓存'
  })
}

defineExpose({
  open
})

</script>
