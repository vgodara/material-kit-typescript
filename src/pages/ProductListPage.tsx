import {
    Box,
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
import Breadcrumbs from "../sections/navigation/Breadcrumbs";
import Iconify from "../components/iconify";
import React, {useState} from "react";
import ProductListToolbar from "../sections/@dashboard/product/ProductListToolbar";
import {ProductList} from "../sections/@dashboard/product/types";
import {Order} from "../components/table/types";
import {PRODUCT_TABLE_HEAD, products, TABLE_HEAD} from "../temp/data";
import {descendingComparator, stableSort} from "../utils/helper";
import Scrollbar from "../components/scrollbar";
import ProductListHead from "../sections/@dashboard/product/ProductListHead";
import Label from "../components/label";
import {sentenceCase} from "change-case";
import {fDate} from "../utils/formatTime";
import {fCurrency} from "../utils/formatNumber";

export default function ProductListPage() {
    const [selectedProducts, setSelectedProducts] = useState<string[]>(Array(0))
    const [searchText, setSearchText] = useState<string>('')
    const [orderBy, setOrderBy] = useState<keyof ProductList>('name');
    const [order, setOrder] = useState<Order>('asc');
    const [open, setOpen] = useState<HTMLElement | null>(null)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredProducts = stableSort(products, getComparator()).filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
    const handleRequestSort = (property: keyof ProductList) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    function handleSelected(id: string) {
        setSelectedProducts(prevState => {
            if (prevState.includes(id)) {
                return prevState.filter(value => value !== id)
            } else {
                return [...prevState, id]
            }
        })

    }

    function handleSelectAll() {
        setSelectedProducts(filteredProducts.map(product => product.id))
    }

    function handleChangePage(pageNumber: number) {
        setPage(pageNumber)
    }

    function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    function getComparator(): (
        a: ProductList,
        b: ProductList,
    ) => number {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function handleCloseMenu() {
        setOpen(null)
    }

    const isNotFound=!filteredProducts.length && !!searchText
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredProducts.length) : 0;


    return <>
    <Container maxWidth={'lg'}>
        <Stack marginBottom={5} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
            <Box flexGrow={1}>
                <Typography gutterBottom variant={'h4'}>Product List</Typography>
                <Breadcrumbs list={[{link: '/dashboard', label: 'Dashboard'}, {
                    link: '/dashboard/products',
                    label: 'Products'
                }, {link: '', label: 'List'},]}/>
            </Box>
            <Button
                variant={'contained'}
                startIcon={<Iconify icon={'eva:plus-fill'}/>}>New Product</Button>
        </Stack>

        <Card>
            <>
                <ProductListToolbar numberOfProductSelected={selectedProducts.length} searchText={searchText}
                                    onSearchText={setSearchText}/>
                <Scrollbar>
                    <TableContainer sx={{minWidth: 800}}>
                        <Table size={'medium'}>
                            <ProductListHead headCells={PRODUCT_TABLE_HEAD} numSelected={selectedProducts.length}
                                             onRequestSort={handleRequestSort}
                                             onSelectAllClick={handleSelectAll} order={order}
                                             orderBy={orderBy} rowCount={filteredProducts.length}/>
                            <TableBody>
                                {filteredProducts.map(({id,name,cover,createdAt,price,stock,priceSale}) => (
                                    <TableRow hover key={id} tabIndex={-1} role="checkbox"
                                              selected={selectedProducts.includes(id)}>
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={selectedProducts.includes(id)}
                                                      onChange={() => handleSelected(id)}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row" padding="none">
                                            <Stack direction="row" alignItems="center" spacing={2}>
                                                <Box sx={{width:48,height:48,borderRadius:2,overflow:'hidden'}} component={'img'} src={cover}/>
                                                <Typography variant="subtitle2" noWrap>
                                                    {name}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell  align="left">
                                            <Typography variant={'body2'}> {fDate(createdAt)}</Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Label
                                                color={(stock === 'out of stock' && 'error') || (stock === 'low stock' && 'warning') || 'success'}>{sentenceCase(stock)}</Label>
                                        </TableCell>
                                        <TableCell  align="left">
                                            <Typography variant={'body2'}> {fCurrency(priceSale??price)}</Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton size="large" color="inherit" onClick={(event)=>setOpen(event.currentTarget)}>
                                                <Iconify icon={'eva:more-vertical-fill'}/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
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
                                                    <strong>&quot;{searchText}&quot;</strong>.
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
                        count={filteredProducts.length}
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