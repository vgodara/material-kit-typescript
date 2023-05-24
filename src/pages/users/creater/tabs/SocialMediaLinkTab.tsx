import {Button, Card, InputAdornment, Stack, TextField} from "@mui/material";
import {userInfo} from "../../../../temp/data";
import {ChangeEvent, useRef} from "react";
import Iconify from "../../../../components/iconify";

type SocialMediaKey=(keyof (typeof userInfo.socialMedia))
export default function SocialMediaLinkTab(){
    const previousLink=userInfo.socialMedia
    const updatedLinks=useRef<Partial<{ [key in SocialMediaKey]: string }>>({});
    const handleInputChange=(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:SocialMediaKey)=>{
        updatedLinks.current[type]=event.target.value
    }
    return (<>
    <Card component={Stack} spacing={5} padding={3}>
        {Object.entries(previousLink).map(([key, value],index)=>(
            <TextField
                key={index}
                variant={'outlined'}
                fullWidth
                defaultValue={value}
                InputProps={{
                    startAdornment:(<InputAdornment position={'start'}>
                        <Iconify width={24} icon={getIcon(key as SocialMediaKey)}/>
                    </InputAdornment>)
                }}
                onChange={(event)=>{handleInputChange(event,key as SocialMediaKey)}}

            />
        ))}
        <Button sx={{alignSelf:'flex-end'}} variant={'contained'} onClick={()=>console.log(updatedLinks.current)}>Save Changes</Button>
    </Card>
    </>)
}
function getIcon(key:SocialMediaKey):string{
    switch (key){
        case "facebook":{
            return 'eva:facebook-fill'
        }
        case "instagram":{
            return 'ant-design:instagram-filled'
        }
        case "linkedin":{
            return 'eva:linkedin-fill'
        }
        case "twitter":{
            return 'eva:twitter-fill'
        }
    }
}