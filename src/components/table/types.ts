export type Order='asc' | 'desc'


export interface HeadCell<T> {
    id: keyof T;
    label?: string;
    alignRight?: boolean
}

export interface EnhancedTableProps<T> {
    headCells: HeadCell<T>[]
    numSelected: number;
    onRequestSort: (property: keyof T) => void;
    onSelectAllClick: (allSelected:boolean) => void;
    order: Order;
    orderBy: keyof T;
    rowCount: number;
}