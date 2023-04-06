import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    Paper,
    Stack,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import SimpleBar from "simplebar-react";
import {ColorPreview} from "../../components/color-utils/ColorPreview";
import {Counter} from "../../components/counter";
import Iconify from "../../components/iconify";
import React from "react";
import {fCurrency} from "../../utils/formatNumber";
import {ItemsToBuyProps, ItemToBuyProps} from "./types";

const BorderLessTableCell = styled(TableCell)(() => ({
    borderWidth: 0,
}))
export default function ItemsToBuy({products, onQuantityChange}: ItemsToBuyProps) {
    const subheader = products.length > 0 ? `\u00A0(${products.length})` : undefined
    return <Card>
        <CardHeader sx={{
            mb: 3, '& .MuiCardHeader-content': {
                display: 'flex',
                alignItems: 'center'
            }
        }} title={`Cart `} subheader={subheader}/>
        <CardContent sx={{p: 0}}>
            {products.length > 0 &&
                (<TableContainer component={Paper}>
                    <SimpleBar>
                        <Table sx={(theme) => ({
                            minWidth: theme.spacing(88),
                            borderCollapse: 'collapse',
                        })}>
                            <TableHead>
                                <HeadRow/>
                            </TableHead>
                            <TableBody>
                                {
                                    products.map((product, index) => (
                                        <BodyRow key={index} product={product}
                                                 onQuantityChange={onQuantityChange}/>
                                    ))}
                            </TableBody>
                        </Table>
                    </SimpleBar>
                </TableContainer>)
            }
            {products.length === 0 &&
                (<Stack alignItems={'center'} justifyContent={'center'} sx={(theme) => ({
                    padding: theme.spacing(8, 2)
                })}>
                    <Box component={'img'} height={240} marginBottom={3}
                         src={'/assets/illustrations/illustration_empty_cart.svg'}/>
                    <Typography marginBottom={1} variant={'h5'}>Cart is Empty</Typography>
                    <Typography color={'text.secondary'} variant={'body2'}>Look like you have no items in your shopping
                        cart.</Typography>
                </Stack>)
            }
        </CardContent>
    </Card>
}

function ProductInfo({product}: ItemToBuyProps) {
    return <Stack direction={'row'} spacing={2} alignItems={'center'}>
        <Box component={'img'} sx={(theme) =>
            ({
                borderRadius: 2,
                width: theme.spacing(8),
                height: theme.spacing(8),
            })
        } src={product.cover}></Box>
        <Stack spacing={0.5}>
            <Typography maxWidth={720} noWrap textOverflow={'ellipsis'} variant={'subtitle2'}>
                {product.name}
            </Typography>
            <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
                <Typography variant={'body2'} color={'text.disabled'}>size:</Typography>
                <Button disabled sx={(theme) => ({
                    minWidth: 0,
                    height: theme.spacing(3),
                    backgroundColor: theme.palette.action.selected,
                    ':disabled': {
                        color: theme.palette.text.primary
                    },
                    ...theme.typography.overline
                })}>{product.selectedSize}</Button>
                <Box><Divider sx={(theme) => ({
                    height: theme.spacing(2),
                    ml: theme.spacing(0.5),
                })} variant={'fullWidth'} orientation={'vertical'}/></Box>
                <ColorPreview sx={{}} colors={[product.selectedColor]}/>
            </Stack>
        </Stack>
    </Stack>
}

function HeadRow() {
    return <TableRow>
        <BorderLessTableCell component={'th'} align={'left'}>{`Product`}</BorderLessTableCell>
        <BorderLessTableCell component={'th'} align={'left'}>{`Price`}</BorderLessTableCell>
        <BorderLessTableCell component={'th'}
                             align={'center'}>{'Quantity'}</BorderLessTableCell>
        <BorderLessTableCell component={'th'}
                             align={'right'}>{`Total Price`}</BorderLessTableCell>
        <BorderLessTableCell component={'th'} align={'right'}></BorderLessTableCell>
    </TableRow>
}

function BodyRow({product, onQuantityChange}: ItemToBuyProps) {
    return <TableRow>
        <BorderLessTableCell><ProductInfo product={product} onQuantityChange={onQuantityChange}/></BorderLessTableCell>
        <BorderLessTableCell>{product.sellingPrice}</BorderLessTableCell>
        <BorderLessTableCell align={'center'}>
            <Counter
                initial={1}
                helperText={`Available ${product.selectedQuantity}`}
                max={product.availableQuantity}
                min={1}
                setQuantity={(value) => onQuantityChange(product.id, value)}/>
        </BorderLessTableCell>
        <BorderLessTableCell
            align={'right'}>{fCurrency(product.totalPrice)}</BorderLessTableCell>
        <BorderLessTableCell align={'right'}>
            <IconButton>
                <Iconify icon={'eva:trash-2-outline'}/>
            </IconButton>
        </BorderLessTableCell>
    </TableRow>
}