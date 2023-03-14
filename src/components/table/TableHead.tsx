import {EnhancedTableProps} from "./types";
import React from "react";
import {Box, Checkbox, TableCell, TableHead as MuiTableHead, TableRow, TableSortLabel} from "@mui/material";
import {visuallyHidden} from '@mui/utils';

export function TableHead<T>({
                                 headCells,
                                 numSelected,
                                 onRequestSort,
                                 onSelectAllClick,
                                 orderBy,
                                 order,
                                 rowCount
                             }: EnhancedTableProps<T>) {
    return <MuiTableHead>
        <TableRow>
            <TableCell padding={"checkbox"}>
                <Checkbox color={"primary"}
                          indeterminate={numSelected > 0 && numSelected < rowCount}
                          checked={rowCount > 0 && numSelected === rowCount}
                          onChange={(_, checked) => (onSelectAllClick(checked))}/>
            </TableCell>
            {headCells.map((headCell) => (
                <TableCell
                    key={(headCell.id.toString())}
                    align={headCell.alignRight ? 'right' : 'left'}
                    sortDirection={orderBy === headCell.id ? order : false}>
                    <TableSortLabel
                        hideSortIcon
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={(_) => (onRequestSort(headCell.id))}>
                        {headCell.label}
                        {orderBy === headCell.id ? (
                            <Box component="span" sx={visuallyHidden}>
                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </Box>
                        ) : null}
                    </TableSortLabel>
                </TableCell>
            ))}
        </TableRow>
    </MuiTableHead>
}