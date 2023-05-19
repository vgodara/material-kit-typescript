import {Card, FormControlLabel, Stack, Switch} from "@mui/material";
import {UploadAvatar} from "../../../../components/dropzone";
import {UpdateProfilePicProps} from "./types";
import React, {ChangeEvent, useState} from "react";

export default function UpdateProfilePic({
                                             image,
                                             onImageUpdate,
                                             isProfilePublic,
                                             onProfileVisibilityUpdate
                                         }: UpdateProfilePicProps) {
    const [visibility, setVisibility] = useState(isProfilePublic)
    const handleSwitchChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        onProfileVisibilityUpdate(checked)
        setVisibility(checked)
    }
    return (<>
        <Card>
            <Stack sx={{padding: (theme) => theme.spacing(10, 3)}} alignItems={'center'} spacing={5}>
                <UploadAvatar image={image} onImageSelection={onImageUpdate}/>
                <FormControlLabel
                    control={<Switch
                        checked={visibility}
                        onChange={handleSwitchChange}/>}
                    label={'Public Profile'}/>

            </Stack>
        </Card>
    </>)
}