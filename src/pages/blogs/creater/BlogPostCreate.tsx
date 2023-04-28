import {
    Autocomplete,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import Breadcrumbs from "../../../sections/navigation/Breadcrumbs";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Quill} from "../../../components/quill";
import {SingleFileDropzone} from "../../../components/dropzone";
import {useState} from "react";

export default function BlogPostCreate() {
    const [postTitle, setPostTitle] = useState('')

    const [description, setDescription] = useState<string>('');
    const [content, setContent] = useState<string>('')
    const tags = ['Full Metal Jacket', 'Toys', 'Dangal', 'Option 4',]
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    return <>

        <Container maxWidth={'lg'}>
            <Stack spacing={1} mb={5}>
                <Typography variant={'h4'}>Create a new post</Typography>
                <Breadcrumbs list={[{label: 'Dashboard', link: '/'}, {
                    label: 'Blog',
                    link: '/dashboard/blog'
                }, {label: 'Create ', link: ''}]}/>
            </Stack>
            <Grid2 container spacing={{xs: 3}}>
                <Grid2 xs={12} md={8}>
                    <Card>
                        <CardContent component={Stack} spacing={3}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label={"Post Title"}
                                value={postTitle}
                                onChange={(event) => {
                                    setPostTitle(event.target.value)
                                }}
                            />
                            <TextField
                                variant={'outlined'}
                                fullWidth
                                label={'Description'}
                                value={description}
                                multiline
                                rows={3}
                                onChange={(event) => {
                                    setDescription(event.target.value)
                                }}
                            />
                            <Stack spacing={1}>
                                <Typography color={'text.secondary'} variant={'subtitle2'}>Content</Typography>

                                <Quill
                                    text={content}
                                    setText={setContent}
                                />

                            </Stack>
                            <Stack spacing={1}>
                                <Typography variant={'subtitle2'}>Cover</Typography>
                                <SingleFileDropzone selectedImage={() => {
                                }}/>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={12} md={4} direction={'column'} component={Stack} spacing={3}>
                    <>
                        <Card>
                            <CardContent component={FormGroup} sx={{rowGap: 2}}>
                                <FormControlLabel sx={{
                                    m:0,
                                    flexDirection:'row-reverse',justifyContent:'space-between'}} control={<Switch/>}
                                                  label={<Typography variant={'body2'}>Publish</Typography>}/>
                                <FormControlLabel sx={{
                                    m:0,
                                    flexDirection:'row-reverse',justifyContent:'space-between'}} control={<Switch/>}
                                                  label={<Typography variant={'body2'}>Enable comments</Typography>}/>


                                <FormControl component={Autocomplete}
                                             clearIcon={null}
                                             popupIcon={null}
                                             fullWidth
                                             multiple
                                             options={tags}
                                             value={selectedTags}
                                             onChange={(event, newValue) => {
                                                 setSelectedTags(newValue as string[]);
                                             }}
                                             renderInput={(params) => <TextField error={selectedTags.length < 2}
                                                                                 helperText={selectedTags.length < 2 ? 'Select at lest two tags' : null}  {...params}
                                                                                 fullWidth={true}
                                                                                 label={"Tags"}
                                             />}
                                />

                                <FormControl fullWidth component={TextField} variant={'outlined'}
                                             label={'Meta Title'}/>
                                <FormControl component={TextField}
                                             variant={'outlined'}
                                             fullWidth
                                             label={'Description'}
                                             value={description}
                                             multiline
                                             rows={3}
                                />
                                <FormControl  fullWidth component={TextField} variant={'outlined'}
                                             label={'Meta Keyword'}/>



                            </CardContent>
                        </Card>
                      <Stack direction={'row'} spacing={1.5} >
                          <Button color={'inherit'}  size={'large'} fullWidth variant={'outlined'}>Preview</Button>
                          <Button size={'large'} fullWidth variant={'contained'}>Post</Button>
                      </Stack>
                    </>
                </Grid2>
            </Grid2>
        </Container>
    </>
}