export declare const useTableSelection: (rowKey?: string) => {
    isSelected: import("vue").Ref<boolean>;
    selected: import("vue").Ref<any[]>;
    selectedIds: import("vue").ComputedRef<any[]>;
    selectionChange: (rows: any[]) => void;
};
