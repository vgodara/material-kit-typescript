import {Box, Button, Card, CardContent, Fab, FormControl, Stack, TextField} from "@mui/material";
import React, {useState} from "react";
import {nonNullOnly} from "../../../../utils/helper";
import {useDropzone} from "react-dropzone";
import Iconify from "../../../../components/iconify";

export default function UserCreatePost() {
    const [postText, setPostText] = useState<string>('')
    const [selectedImage,setSelectedImag]=useState('')
    return (<>
        <Card>
            <CardContent>
                <FormControl component={TextField}
                             variant={'outlined'}
                             fullWidth
                             placeholder={'Share what you are thinking'}
                             value={postText}
                             multiline
                             rows={3}
                />
                <Stack mt={3} direction={'row'} justifyContent={'space-between'}>
                    <AddImage selectedImage={setSelectedImag}/>
                    <Button variant={'contained'}>Post</Button>
                </Stack>
            </CardContent>
        </Card>
    </>)
}

export function AddImage({selectedImage}: {
    selectedImage: (image: string) => void
}) {
    const [image, setImage] = useState<string | undefined>()
    const onDrop = (acceptedFiles: File[]) => {
        const fileAsUrl = acceptedFiles.filter((_, index) => index === 0).map((file) => URL.createObjectURL(file)).find(() => true)
        setImage(fileAsUrl)
        nonNullOnly(image, selectedImage)
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

    return (<Box {...getRootProps()}>
        <input {...getInputProps()} />
        <Fab variant={'extended'} size={'small'}>

            <Iconify sx={{mr: 1}} color={'primary'} icon={'ic:round-perm-media'}/>
            Image/Video</Fab>
    </Box>)
}
