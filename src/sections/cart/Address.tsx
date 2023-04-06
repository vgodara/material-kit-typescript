import {Button, Paper, Stack, Typography} from "@mui/material";
import Label from "../../components/label";
import {AddressProps} from "./types";


export default function Address({address:{id,name,isDefault,address,pinCode,type},onAddressSelection}:AddressProps) {
    return < >
        <Paper  sx={(theme) => ({
            padding: theme.spacing(3),
            marginBottom:theme.spacing(3),
            boxShadow:theme.customShadows.card,
            borderRadius:theme.spacing(2)
        })}  >
            <Stack spacing={{xs:2}} direction={{xs: 'column', md: 'row'}}>
                <Stack flexGrow={1}  spacing={1} direction={'column'}>
                    <Stack direction={'row'}>
                        <Typography variant={'subtitle1'}>{name}</Typography>
                        {type && (<Typography color={'text.secondary'}
                                     variant={'body2'}>{`\u00A0(${type})`}</Typography>)}
                        {isDefault && (<Label sx={{ml: 1}} color={'primary'} variant={'soft'}>Default</Label>)}
                    </Stack>
                    <Typography variant={'body2'}>{address}</Typography>
                    <Typography color={'text.secondary'} variant={'body2'}>{pinCode}</Typography>
                </Stack>
                <Stack flexShrink={0}   direction={'row'} alignSelf={{md: 'flex-end'}}>
                    <Button
                        onClick={()=>onAddressSelection(id)}
                        disableElevation
                        size={'small'}
                        variant={'outlined'}
                    >Deliver to this Address</Button>
                </Stack>
            </Stack>
        </Paper>
    </>
}