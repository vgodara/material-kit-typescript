import {ShopProductProps} from "./types";
import {Box, Card, Link, Stack, Typography} from "@mui/material";
import Label from "../../../components/label";
import {ColorPreview} from "../../../components/color-utils/ColorPreview";
import {fCurrency} from "../../../utils/formatNumber";
import {Link as RouterLink} from "react-router-dom"

export default function ProductCard({product: {id, name, cover, colors, price, status, priceSale}}: ShopProductProps) {
    return  <>
            <Stack component={Card}  overflow={'hidden'}>
                <Box sx={{
                    position: 'relative'
                }}>
                    <Box component={'img'}
                         sx={{
                             p:1,
                             width: 1,
                             height: 1,
                             objectFit: 'cover',
                             //To remove extra space below image
                             display: 'block',
                             overflow:'hidden',
                             borderRadius:2,
                         }}
                         src={cover}
                    ></Box>
                    {status && <Label variant={'filled'} color={status === 'sale' ? 'error' : 'info'}
                                      sx={{
                                          position: 'absolute',
                                          top: 16,
                                          right: 16,
                                          textTransform: 'uppercase',
                                      }}>{status}</Label>}
                </Box>
                <Stack spacing={2} sx={{p: 3}}>
                    <Link component={RouterLink}  to={`/dashboard/product/${id}`}
                          color="inherit" underline="hover">
                        <Typography variant="subtitle2" noWrap>
                            {name}
                        </Typography>
                    </Link>
                    <Stack direction={'row'} alignItems="center" justifyContent="space-between">
                        <ColorPreview colors={colors}/>
                        <Typography variant={'subtitle1'}>
                            <Typography variant={'body1'} component={'span'}
                                        sx={{
                                            color: (theme) => theme.palette.text.disabled,
                                            textDecoration: 'line-through'
                                        }}>{priceSale && fCurrency(priceSale)}</Typography>
                            &nbsp;
                            {fCurrency(price)}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>

}