import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

export type ColumnType = 'index' | 'selection' | 'radio' | 'expand'

export type ColumnFixedType = 'left' | 'right' | ''

export interface ColumnsProps<T = any>
	extends Partial<Omit<TableColumnCtx<T>, 'type' | 'children' | 'renderCell' | 'renderHeader'>> {
	type?: ColumnType
	isShow?: boolean
	fixed?: ColumnFixedType
}

export interface PageProps {
	layout: string
	pageSizes: number[]
	hideOnSinglePage: boolean
	background: boolean
	small: boolean
}

export interface PageParamsProps {
	pageNum: string
	pageSize: string
	initPageNum: number
	initPageSize: number
}

export type TableSize = 'default' | 'small' | 'large'

export interface ResponseDataProps<T = any> {
	rows: T[]
	total?: number
}
