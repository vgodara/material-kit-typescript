import React, {useState} from "react";
import {useDropzone} from "react-dropzone";
import {Box, IconButton, Link, Stack, Typography} from "@mui/material";
import {alpha} from "@mui/material/styles";
import Iconify from "../iconify";
import {nonNullOnly} from "../../utils/helper";

export default function SingleFileDropzone({selectedImage}: {
    selectedImage: (image: string) => void
}) {
    const [image, setImage] = useState<string | undefined>()
    const onDrop = (acceptedFiles: File[]) => {
        const fileAsUrl = acceptedFiles.filter((_, index) => index === 0).map((file) => URL.createObjectURL(file)).find(() => true)
        setImage(fileAsUrl)
        nonNullOnly(image,selectedImage)
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

    return (
        <Box>
            <Box sx={{
                outline: 'none',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: 1,
                p: 5,
                backgroundColor: (theme) => theme.palette.background.neutral,
                border: (theme) => `1px dashed ${alpha(theme.palette.text.disabled, 0.32)}`,
                ':hover': {
                    opacity: 0.72,
                },
                transition: (theme) => theme.transitions.create('padding'),
                ...(image && {padding: '12% 0px'})

            }} {...getRootProps()}>
                <input {...getInputProps()} />
                <Stack spacing={5} direction={{md: 'row'}} textAlign={{xs: 'center', md: 'left'}} alignItems={'center'}
                       justifyContent={'center'}>
                    <Box width={'220px'} flexShrink={1} component={"img"}
                         src={'/assets/illustrations/illustration_upload_file.svg'}></Box>
                    <Box>
                        <Typography gutterBottom variant={'h5'}>Drop or Select file</Typography>
                        <Typography variant={'body2'}>Drop or Select file {<Link component={'span'} underline={'always'}
                                                                                 variant={"body2"}>browse</Link>} thorough
                            your machine</Typography>
                    </Box>
                </Stack>

                {image &&
                    <Box
                        component={'img'}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: 'calc(100% - 16px)',
                            height: 'calc(100% - 16px)',
                            zIndex: 8,
                            objectFit: 'cover'

                        }}
                        src={image}
                    />

                }
            </Box>
            {image && <IconButton sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                zIndex: 9,
                backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.48),
                color: (theme) => alpha(theme.palette.common.white, 0.72),
                ':hover': {
                    backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.72),

                }
            }} onClick={() =>setImage(undefined)
            }>
                <Iconify width={18} icon={'eva:close-fill'}/>
            </IconButton>}

        </Box>
    );
}
