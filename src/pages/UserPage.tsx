import {
    Avatar,
    Button,
    Card,
    Checkbox,
    Container,
    IconButton,
    MenuItem,
    Paper,
    Popover,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import Iconify from "../components/iconify";
import {UserListHead, UserListToolbar} from "../sections/@dashboard/user";
import {TABLE_HEAD, users} from "../temp/data";
import {sentenceCase} from "change-case";
import Label from "../components/label";
import React, {useState} from "react";
import {User} from "../sections/@dashboard/user/types";
import {Order} from "../components/table/types";
import Scrollbar from "../components/scrollbar";
import {Helmet} from "react-helmet-async";
import {stableSort} from "../utils/helper";



export default function UserPage() {
    const [selected, setSelected] = useState<Set<string>>(new Set())
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orderBy, setOrderBy] = useState<keyof User>('name');
    const [order, setOrder] = useState<Order>('asc');
    const [filterName,setFilterName]=useState<string>('')
    const [open, setOpen] = useState<HTMLElement | null>(null)
    const handleRequestSort = (property: keyof User) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    function handleSelected(id: string) {
        setSelected(prevState => {
            if (prevState.has(id)) {
                return new Set(Array.from(prevState).filter(value => value !== id))
            } else {
                return new Set(prevState.add(id))
            }
        })

    }

    function handleAllSelect(allSelected: boolean) {
        if (allSelected) {
            setSelected(new Set(filteredUser.map(user => user.id)))
        } else setSelected(new Set())
    }

    function handleChangePage(pageNumber:number) {
        setPage(pageNumber)
    }

    function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(): (
        a: User,
        b: User,
    ) => number {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function handleCloseMenu(event: React.MouseEvent<HTMLButtonElement>) {
        setOpen(null)
    }
    const filteredUser=stableSort(users, getComparator()).filter((user)=>user.name.toLowerCase().includes(filterName.toLowerCase()))
    const isNotFound=!filteredUser.length && !!filterName
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredUser.length) : 0;
    return <>
        <Helmet>
            <title> User | Minimal UI </title>
        </Helmet>
        <Container>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{mb: 5}}>
                <Typography variant={'h4'} gutterBottom>User</Typography>
                <Button variant={"contained"} startIcon={<Iconify icon={'eva:plus-fill'}/>}>New User</Button>
            </Stack>
            <Card>
                <>
                    <UserListToolbar numSelected={selected.size} filterName={filterName} onFilterName={(filterName) => {
                     setFilterName(filterName)
                    }}/>
                    <Scrollbar>
                        <TableContainer sx={{minWidth: 800}}>
                            <Table size={'medium'}>
                                <UserListHead headCells={TABLE_HEAD} numSelected={selected.size}
                                              onRequestSort={handleRequestSort} onSelectAllClick={handleAllSelect}
                                              order={order} orderBy={orderBy}
                                              rowCount={filteredUser.length}/>
                                <TableBody>
                                    {stableSort(users, getComparator()).filter((user)=>user.name.toLowerCase().includes(filterName.toLowerCase())).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(({
                                                  id,
                                                  avatarUrl,
                                                  name,
                                                  company,
                                                  isVerified,
                                                  status,
                                                  role
                                              }, index) => {
                                            const isSelected = selected.has(id)
                                            return <TableRow hover key={id} tabIndex={-1} role="checkbox"
                                                             selected={isSelected}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox checked={isSelected} onChange={() => handleSelected(id)}/>
                                                </TableCell>

                                                <TableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Avatar alt={name} src={avatarUrl}/>
                                                        <Typography variant="subtitle2" noWrap>
                                                            {name}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>

                                                <TableCell align="left">{company}</TableCell>

                                                <TableCell align="left">{role}</TableCell>

                                                <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>

                                                <TableCell align="left">
                                                    <Label
                                                        color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton size="large" color="inherit" onClick={(event)=>setOpen(event.currentTarget)}>
                                                        <Iconify icon={'eva:more-vertical-fill'}/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>

                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={TABLE_HEAD.length} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                {isNotFound && (
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                                <Paper
                                                    sx={{
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    <Typography variant="h6" paragraph>
                                                        Not found
                                                    </Typography>

                                                    <Typography variant="body2">
                                                        No results found for &nbsp;
                                                        <strong>&quot;{filterName}&quot;</strong>.
                                                        <br /> Try checking for typos or using complete words.
                                                    </Typography>
                                                </Paper>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )}
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={filteredUser.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={(_,page)=>handleChangePage(page)}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Scrollbar>
                </>
            </Card>
        </Container>
        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleCloseMenu}
            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            PaperProps={{
                sx: {
                    p: 1,
                    width: 140,
                    '& .MuiMenuItem-root': {
                        px: 1,
                        typography: 'body2',
                        borderRadius: 0.75,
                    },
                },
            }}
        >
            <MenuItem>
                <Iconify icon={'eva:edit-fill'} sx={{mr: 2}}/>
                Edit
            </MenuItem>

            <MenuItem sx={{color: 'error.main'}}>
                <Iconify icon={'eva:trash-2-outline'} sx={{mr: 2}}/>
                Delete
            </MenuItem>
        </Popover>
    </>
}