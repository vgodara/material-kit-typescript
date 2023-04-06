import {TableHead} from "../../../components/table/";
import {User} from "./types";
import {EnhancedTableProps} from "../../../components/table/types";


export default function UserListHead(props:EnhancedTableProps<User>){
    return  TableHead<User>(props)
}