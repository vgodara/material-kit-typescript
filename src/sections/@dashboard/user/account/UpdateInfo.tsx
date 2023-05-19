import {UpdateInfoProps, UpdateUserInfo} from "./types";
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField
} from "@mui/material";
import React, {ChangeEvent} from "react";

export default function UpdateInfo({info, onUpdate}: UpdateInfoProps) {
    const updates: UpdateUserInfo = {}
    const addInfo = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>, key: keyof UpdateUserInfo) => {
        updates[key] = event.target.value
    }
    return (<>
        <Card>
            <CardContent>
                <Box sx={(theme) => ({
                    display: 'grid',
                    gap: theme.spacing(3, 2),
                    gridTemplateColumns: {xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)'},
                    marginBottom: 3,
                })}>
                    <TextField
                        defaultValue={info.name}
                        fullWidth
                        variant={'outlined'}
                        label={'Full Name'}
                        onChange={(event) => addInfo(event, 'name')}
                    />
                    <TextField
                        defaultValue={info.emailAddress}
                        fullWidth variant={'outlined'}
                        label={'Email Address'}
                        onChange={(event) => addInfo(event, 'emailAddress')}
                    />
                    <TextField
                        defaultValue={info.phoneNumber}
                        fullWidth
                        variant={'outlined'}
                        label={'Phone Number'}
                        onChange={(event) => addInfo(event, 'phoneNumber')}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Country</InputLabel>
                        <Select
                            defaultValue={info.country}
                            variant={'outlined'}
                            label={'Country'}
                            onChange={(event) => addInfo(event, 'country')}
                        >
                            <MenuItem value={'India'}>India</MenuItem>
                            <MenuItem value={'China'}>China</MenuItem>
                            <MenuItem value={'USA'}>USA</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        defaultValue={info.state}
                        fullWidth
                        variant={'outlined'}
                        label={'State/Region'}
                        onChange={(event) => addInfo(event, 'state')}
                    />
                    <TextField
                        defaultValue={info.city}
                        fullWidth
                        variant={'outlined'}
                        label={'City'}
                        onChange={(event) => addInfo(event, 'city')}
                    />
                    <TextField
                        defaultValue={info.address}
                        fullWidth variant={'outlined'}
                        label={'Address'}
                        onChange={(event) => addInfo(event, 'address')}
                    />
                    <TextField
                        defaultValue={info.pinCode}
                        fullWidth
                        variant={'outlined'}
                        label={'Zip/Code'}
                        onChange={(event) => addInfo(event, 'pinCode')}
                    />
                    <TextField
                        sx={{gridColumn: 'span 2'}}
                        defaultValue={info.aboutMe}
                        multiline
                        rows={4}
                        fullWidth
                        variant={'outlined'}
                        label={'About me'}
                        onChange={(event) => addInfo(event, 'aboutMe')}
                    />


                </Box>
                <Stack alignItems={'flex-end'}>
                    <Button variant={'contained'} onClick={() => onUpdate(updates)}>Save changes</Button>
                </Stack>
            </CardContent>
        </Card>

    </>)
}
