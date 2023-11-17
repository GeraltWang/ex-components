import { ref, computed } from 'vue'

export const useTableSelection = (rowKey = 'id') => {
	const isSelected = ref(false)
	const selected = ref<any[]>([])

	const selectedIds = computed(() => {
		return selected.value.map(item => item[rowKey])
	})

	const selectionChange = (rows: any[]) => {
		rows.length ? (isSelected.value = true) : (isSelected.value = false)
		selected.value = rows
	}

	return {
		isSelected,
		selected,
		selectedIds,
		selectionChange,
	}
}
