import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import Breadcrumbs from "../../../sections/navigation/Breadcrumbs";
import Grid2 from "@mui/material/Unstable_Grid2";
import {UploadAvatar} from "../../../components/dropzone";

export default function UserCreatePage() {
    return <>

        <Container maxWidth={'lg'}>
            <Stack spacing={1} mb={5}>
                <Typography variant={'h4'}>Create a new user</Typography>
                <Breadcrumbs list={[{label: 'Dashboard', link: '/'}, {
                    label: 'User',
                    link: '/dashboard/users'
                }, {label: 'New User', link: ''}]}/>
            </Stack>
            <Grid2 container spacing={{xs: 3}} component={'form'}>
                <Grid2 xs={12} md={4}>
                    <Card sx={{padding: (theme) => theme.spacing(10, 3, 3, 3)}}>
                        <Stack spacing={5}>
                            <UploadAvatar/>
                            <FormControlLabel sx={{flexDirection: 'row-reverse'}} control={<Switch/>}
                                              label={<>
                                                  <Typography marginBottom={0.5} variant={'subtitle2'}>
                                                      Email Verified
                                                  </Typography>
                                                  <Typography color={'text.secondary'} variant={'body2'}>
                                                      Disabling this will automatically send the user a verification
                                                      email
                                                  </Typography></>}/>
                        </Stack>
                    </Card>
                </Grid2>
                <Grid2 xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Box sx={(theme) => ({
                                display: 'grid',
                                gap: theme.spacing(3, 2),
                                gridTemplateColumns: {xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)'},
                                marginBottom: 3,
                            })}>
                                <TextField fullWidth variant={'outlined'} label={'Full Name'}/>
                                <TextField fullWidth variant={'outlined'} label={'Email Address'}/>
                                <TextField fullWidth variant={'outlined'} label={'Phone Number'}/>
                                <FormControl fullWidth>
                                    <InputLabel >Country</InputLabel>
                                    <Select variant={'outlined'} label={'Country'}>
                                        <MenuItem value={'India'}>India</MenuItem>
                                        <MenuItem value={'China'}>China</MenuItem>
                                        <MenuItem value={'USA'}>USA</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField fullWidth variant={'outlined'} label={'State/Region'}/>
                                <TextField fullWidth variant={'outlined'} label={'City'}/>
                                <TextField fullWidth variant={'outlined'} label={'Address'}/>
                                <TextField fullWidth variant={'outlined'} label={'Zip/Code'}/>
                                <TextField fullWidth variant={'outlined'} label={'Company'}/>
                                <TextField fullWidth variant={'outlined'} label={'Role'}/>


                            </Box>
                            <Stack alignItems={'flex-end'}>
                                <Button variant={'contained'}>Create User</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid2>

            </Grid2>
        </Container>

    </>
}