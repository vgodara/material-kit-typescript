import {EnhancedTableProps} from "../../../components/table/types";
import {ProductList} from "./types";
import {TableHead} from "../../../components/table";

export default function ProductListHead(props:EnhancedTableProps<ProductList>){
    return TableHead<ProductList>(props)
}