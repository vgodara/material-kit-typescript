import {Button, Card, Stack, TextField} from "@mui/material";
import {ChangeEvent, useRef, useState} from "react";
import {faker} from "@faker-js/faker";
import {nonNullOnly} from "../../../../utils/helper";

export default function ChangePasswordTab() {
    const typingDelay=500
    const isTyping =useRef<Partial<{
        oldPassword: NodeJS.Timeout,
        newPassword:NodeJS.Timeout,
        confirmNewPassword:NodeJS.Timeout
    }>>({})
    //Delayed Verification doesn't work well with useState since the useState value is not updated until the ui re-rendering isn't finished
    const oldPassword = useRef<string |undefined>()
    const [oldPasswordKey,_restOldPasswordField]=useState('oldPassword')
    const resetOldPasswordField=()=>_restOldPasswordField(prevState => prevState+1)

    const [oldPasswordError,setOldPasswordError]=useState(false)
    const updateOldPassword=(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        oldPassword.current=event.target.value
        clearTimeout(isTyping.current.oldPassword)
        isTyping.current.oldPassword=   setTimeout(()=>{
            const passwordLength=nonNullOnly(oldPassword.current,(value)=>value.length)??-1
            setOldPasswordError(passwordLength<5)
        },typingDelay)
    }
    const newPassword = useRef<string|undefined>()
    const [newPasswordKey,_restNewPasswordField]=useState('newPassword')
    const restNewPasswordField=()=>_restNewPasswordField(prevState => prevState+1)
    const [newPasswordError,setNewPasswordError] = useState(false)
    const updateNewPassword=(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        newPassword.current=event.target.value
        clearTimeout(isTyping.current.newPassword)
      isTyping.current.newPassword=  setTimeout(()=>{
          const passwordLength=nonNullOnly(newPassword.current,(value)=>value.length)??-1
            setNewPasswordError(passwordLength<5)
        },typingDelay)
    }
    const confirmNewPassword =useRef<string |undefined>()
    const [confirmNewPasswordKey,_restConfirmNewPasswordField]=useState('confirmNewPassword')
    const restConfirmNewPasswordField=()=>_restConfirmNewPasswordField(prevState => prevState+1)

    const [confirmNewPasswordError,setConfirmNewPasswordError] = useState(false)
    const updateConfirmNewPassword=(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        confirmNewPassword.current=event.target.value
        clearTimeout(isTyping.current.confirmNewPassword)
      isTyping.current.confirmNewPassword=  setTimeout(()=>{
          const arePasswordSame=confirmNewPassword.current===newPassword.current
            setConfirmNewPasswordError(!arePasswordSame)
        },typingDelay)
    }


    const handleSaveChanges = () => {
        resetOldPasswordField()
        restNewPasswordField()
        restConfirmNewPasswordField()
        setOldPasswordError(faker.datatype.boolean)

    };
    return (<>
        <Card   >
          <Stack component={'form'} spacing={4} padding={3}>
            <TextField
                key={oldPasswordKey}
                fullWidth
                helperText={oldPasswordError?'Password is wrong':''}
                error={oldPasswordError}
                variant={'outlined'}
                label={'Old Password'}
                onChange={updateOldPassword}
            />
            <TextField
                key={newPasswordKey}
                fullWidth
                label={"Password"}
                type={'password'}
                helperText={'Password must be minimum 6 characters'}
                error={newPasswordError}
                onChange={updateNewPassword}

            />
            <TextField
                key={confirmNewPasswordKey}
                fullWidth
                helperText={confirmNewPasswordError?'Password must match':''}
                error={confirmNewPasswordError}
                variant={'outlined'}
                type={'password'}
                onChange={updateConfirmNewPassword}
            />
            <Button sx={{alignSelf: 'flex-end'}} variant={'contained'} onClick={handleSaveChanges}>Save Changes</Button>
          </Stack>
        </Card>
    </>)
}



