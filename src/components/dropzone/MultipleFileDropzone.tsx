import React, {useEffect, useRef, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {Box, Button, IconButton, Link, Slide, Stack, Typography} from "@mui/material";
import {alpha} from "@mui/material/styles";
import Iconify from "../iconify";
import {TransitionGroup} from "react-transition-group";

export default function MultipleFileDropzone() {
    const [images, setImages] = useState<string[]>([]);
    const removeImage = (index: number[]) => {
        setImages(prevState => prevState.filter((_, i) =>!index.includes(i)));
    };


    const onDrop = (acceptedFiles: File[]) => {
        const filesAsUrl = acceptedFiles.map((file) => URL.createObjectURL(file))
        setImages(prevState => prevState.concat(filesAsUrl))
    }

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
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
                overflow: 'hidden',
                position: 'relative',
                borderRadius: 1,
                padding: 5,
                backgroundColor: (theme) => theme.palette.background.neutral,
                border: (theme) => `1px dashed ${alpha(theme.palette.text.disabled, 0.32)}`,
                ':hover': {
                    opacity: 0.72,
                }

            }} {...getRootProps()}>
                <input {...getInputProps()} />
                <Stack spacing={5} direction={{md: 'row'}} textAlign={{xs: 'center', md: 'left'}} alignItems={'center'}
                       justifyContent={'center'}>
                    <Box width={'220px'} flexShrink={1} component={"img"}
                         src={'/assets/illustrations/illustration_upload_file.svg'}></Box>
                    <Box flexGrow={1}>
                        <Typography gutterBottom variant={'h5'}>Drop or Select file</Typography>
                        <Typography variant={'body2'}>Drop or Select file {<Link component={'span'} underline={'always'}
                                                                                 variant={"body2"}>browse</Link>} thorough
                            your machine</Typography>
                    </Box>
                </Stack>
            </Box>
            <DisplaySelectedImage images={images} removeImage={removeImage}/>
        </Box>
    );
}

function DisplaySelectedImage({images, removeImage}: {
    images: string[],
    removeImage: (index:  number[]) => void
}) {
    const containerRef  = useRef<HTMLDivElement>()

    const [children, setChildren] = useState<Element[]>([]);
    const handleImageRemoval = (index: number | number[]) => {
        const imagesTobeRemoved=Array(0).concat(index)
        removeImage(imagesTobeRemoved)
        setChildren(prevState => prevState.filter((_,i)=>!imagesTobeRemoved.includes(i)))

    }
    const handleRemoveALl = () => handleImageRemoval(images.map((_, index) => index))

    useEffect(() => {
        const childrenArray = Array.from(containerRef.current?.children ?? [])
        setChildren(childrenArray);
    }, [images])

    return <> {images.length > 0 &&
        <>
            <Box ref={containerRef} sx={{my: 3, display: 'flex', gap: 1, flexWrap: 'wrap'}}
                 component={TransitionGroup}>

                {images.map((image, index) => (
                    <Slide key={index} direction={'up'} mountOnEnter unmountOnExit container={children[index]}>
                        <Box sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            border: (theme) => `1px solid ${alpha(theme.palette.text.disabled, 0.24)}`,
                            borderRadius: 1.5,
                            height: 80, width: 80,
                        }}>
                            <Box sx={{objectFit: 'cover', height: 1, width: 1}} component={'img'} src={image}/>
                            <IconButton sx={{
                                position: 'absolute',
                                top: 4,
                                right: 4,
                                p: 0,
                                backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.48),
                                color: (theme) => alpha(theme.palette.common.white, 0.72),
                                ':hover': {
                                    backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.72),

                                }
                            }} onClick={() => handleImageRemoval(index)}>
                                <Iconify width={16} icon={'eva:close-fill'}/>
                            </IconButton>
                        </Box>
                    </Slide>
                ))}

            </Box>
            <Stack spacing={1.5} direction={'row'} justifyContent={'flex-end'}>
                <Button color={'inherit'} variant={'outlined'} onClick={handleRemoveALl}>Remove All</Button>
                <Button disableElevation variant={'contained'} color={'primary'}>Upload Files</Button>
            </Stack>
        </>
    }
    </>
}