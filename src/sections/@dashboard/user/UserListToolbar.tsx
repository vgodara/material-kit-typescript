import React from "react";
import {UserTableToolbarProps} from "./types";
import TableToolBar from "../../../components/table/TableToolBar";


export default function UserListToolbar({numSelected, filterName, onFilterName}: UserTableToolbarProps) {
  return <TableToolBar numSelected={numSelected} searchText={filterName} onSearchText={onFilterName} searchHint={'Search user'}/>
}