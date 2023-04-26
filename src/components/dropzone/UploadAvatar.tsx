import {Box, Card, CardContent, CardHeader, Stack, Typography} from "@mui/material";
import {useDropzone} from "react-dropzone";
import React, {useState} from "react";
import {alpha} from "@mui/material/styles";
import Iconify from "../iconify";
import Image from "mui-image";

export default function UploadAvatar() {
    const [image,setImage]=useState<string|undefined>()
    const onDrop = (acceptedFiles: File[]) => {
        const fileAsUrl = acceptedFiles.filter((_,index)=>index===0).map((file) => URL.createObjectURL(file)).find(()=>true)
        setImage(fileAsUrl)
    }

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        multiple: false,
        onDrop,
        accept: {
            'image/*': []
        }
    });
    return <Card>
        <CardHeader title={'Upload Avatar'}/>
        <CardContent component={Stack} alignItems={'center'}  spacing={2}>
            <Stack sx={{
                position:'relative',
                height:144,
                width:144,
                border:(theme)=>`1px dashed ${alpha(theme.palette.text.disabled,0.32)}`,
                borderRadius:'50%',
                overflow:'hidden',
                cursor:'pointer',
            }} margin={'auto'} justifyContent={'center'} alignItems={'center'} {...getRootProps()}>
                <input {...getInputProps()} />
                {image && <Box sx={{
                    position:'absolute',
                    overflow:'hidden',
                    zIndex:8,
                    width:'calc(100% - 16px)',
                    height:'calc(100% - 16px)',
                    borderRadius:'50%',

                }}><Image   src={image}/></Box>}

                <Stack sx={{
                    zIndex:9,
                    color:(theme)=>theme.palette.text.disabled,
                    background:(theme)=>theme.palette.background.neutral,
                    width:'calc(100% - 16px)',
                    height:'calc(100% - 16px)',
                    borderRadius:'50%',
                    transition:(theme)=>theme.transitions.create('opacity',{duration:200}),
                    opacity:image?0:1,
                    ':hover':{
                        opacity:0.72,
                    },
                    ...(image && {
                        background:(theme)=>alpha(theme.palette.grey[900],0.64),
                        color:(theme)=>theme.palette.common.white,
                    })

                }} alignItems={'center'} justifyContent={'center'} spacing={1}>

                    <Iconify width={24} icon={'ic:round-add-a-photo'}/>
                    <Typography variant={'caption'} >Upload photo</Typography>
                </Stack>

            </Stack>
            <Typography color={'text.secondary'} textAlign={'center'} variant={'caption'}>Allowed *.jpeg, *.jpg, *.png, *.gif
                <br/> max size of 3.1 MB</Typography>
        </CardContent>
    </Card>
}