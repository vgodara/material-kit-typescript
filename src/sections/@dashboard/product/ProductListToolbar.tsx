import {ProductListToolbarProps} from "./types";
import {TableToolBar} from "../../../components/table";

export default function ProductListToolbar({ numberOfProductSelected,searchText,onSearchText}:ProductListToolbarProps){
    return <TableToolBar numSelected={numberOfProductSelected} searchText={searchText} onSearchText={onSearchText} searchHint={'Search products'}/>
}