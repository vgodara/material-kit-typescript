import {ShopProductProps} from "./types";
import {Box, Card, Link, Stack, Typography} from "@mui/material";
import Label from "../../../components/label";
import {ColorPreview} from "../../../components/color-utils/ColorPreview";
import {fCurrency} from "../../../utils/formatNumber";

export default function ProductCard({product: {id, name, cover, colors, price, status, priceSale}}: ShopProductProps) {
    return <>
        <Card>
            <Stack>
                <Box sx={{
                    position: 'relative'
                }}>
                    <Box component={'img'}
                         sx={{
                             width: 1,
                             height: 1,
                             objectFit: 'cover',
                             //To remove extra space below image
                             display: 'block'
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
                    <Link color="inherit" underline="hover">
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
        </Card>
    </>
}