import {Checkbox, FormControlLabel, IconButton, InputAdornment, Link, Stack, TextField} from "@mui/material";
import Iconify from "../../components/iconify";
import {useState} from "react";
import {LoadingButton} from "@mui/lab";


export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    return <>
        <Stack spacing={3}>
            <TextField label={"Email address"}/>
            <TextField
                label={"Password"}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position={'end'}>
                            <IconButton onClick={() => setShowPassword(!showPassword)} edge={"end"}>
                                <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                            </IconButton>
                        </InputAdornment>)
                }}/>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
            <FormControlLabel control={<Checkbox name="remember"/>} label="Remember me"/>
            <Link variant="subtitle2" underline="hover">
                Forgot password?
            </Link>
        </Stack>
        <LoadingButton fullWidth variant={"contained"} type={"submit"} size={"large"}>Login</LoadingButton>

    </>
}