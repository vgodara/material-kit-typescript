import {
    Autocomplete,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    InputAdornment,
    InputLabel,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {Quill} from "../../../components/quill";
import {MultipleFileDropzone} from "../../../components/dropzone";
import Breadcrumbs from "../../../sections/navigation/Breadcrumbs";

export default function ProductCreatePage() {
    const [productName, setProductName] = useState('')

    const [description, setDescription] = useState<string>('');
    const tags = ['Full Metal Jacket', 'Toys', 'Dangal', 'Option 4',]
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    return <Container maxWidth={'lg'}>
        <Stack spacing={1} mb={5}>
            <Typography variant={'h4'}>Create a new product</Typography>
            <Breadcrumbs list={[{label:'Dashboard',link:'/'},{label:'E-Commerce',link:'/'},{label:'New Product',link:''},]}/>
        </Stack>
        <Grid2 container spacing={{xs: 3}}>
            <Grid2 xs={12} md={8}>
                <Card >
                    <CardContent component={Stack} spacing={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label={"Product Name"}
                            value={productName}
                            onChange={(event) => {
                                setProductName(event.target.value)
                            }}
                        />
                        <Stack spacing={1}>
                            <Typography color={'text.secondary'} variant={'subtitle2'}>Description</Typography>

                            <Quill
                                text={description}
                                setText={setDescription}
                            />

                        </Stack>
                        <Stack spacing={1}>
                            <Typography variant={'subtitle2'}>Images</Typography>
                            <MultipleFileDropzone/>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2 xs={12} md={4} flexBasis={{xs: '100%', md: `${100 / 3}%`}}>
                <Stack spacing={3}>
                    <Card>
                        <CardContent component={FormGroup} sx={{rowGap: 2}}>
                            <FormControlLabel control={<Switch/>}
                                              label={<Typography variant={'body2'}>In Stock</Typography>}/>
                            <FormControl fullWidth component={TextField} variant={'outlined'} label={'Product Code'}/>
                            <FormControl fullWidth component={TextField} variant={'outlined'} label={'Product SKU'}/>
                            <FormControl fullWidth sx={{rowGap: 1}}>
                                <FormLabel sx={{typography: 'subtitle2'}}>Gender</FormLabel>
                                <RadioGroup sx={{flexDirection: 'row'}}

                                >
                                    <FormControlLabel value="female" control={<Radio/>}
                                                      label={(<Typography variant={'body2'}>Female</Typography>)}/>
                                    <FormControlLabel value="male" control={<Radio/>}
                                                      label={(<Typography variant={'body2'}>Male</Typography>)}/>
                                    <FormControlLabel value="kids" control={<Radio/>}
                                                      label={(<Typography variant={'body2'}>Kids</Typography>)}/>
                                </RadioGroup>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select native label="Category">
                                    <optgroup label="Clothing">
                                        <option value={1}>Option 1</option>
                                        <option value={2}>Option 2</option>
                                    </optgroup>
                                    <optgroup label="Tailored">
                                        <option value={3}>Option 3</option>
                                        <option value={4}>Option 4</option>
                                    </optgroup>
                                    <optgroup label="Accessories">
                                        <option value={3}>Option 3</option>
                                        <option value={4}>Option 4</option>
                                    </optgroup>
                                </Select>
                            </FormControl>

                            <Autocomplete
                                clearIcon={null}
                                popupIcon={null}

                                fullWidth
                                multiple
                                options={tags}
                                value={selectedTags}
                                onChange={(event, newValue) => {
                                    setSelectedTags(newValue);
                                }}
                                renderInput={(params) => <TextField error={selectedTags.length < 2}
                                                                    helperText={selectedTags.length < 2 ? 'Select at lest two tags' : null}  {...params}
                                                                    fullWidth={true}
                                                                    label="Tags"/>}

                            />


                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent component={FormGroup} sx={{rowGap:3}}>
                            <FormControl fullWidth component={TextField}
                                         InputProps={{startAdornment:(<InputAdornment position={'start'}>
                                                 <Typography component={'span'} color={'text.disabled'}>$</Typography>
                                             </InputAdornment>)}}
                                         label={'Regular Price'} placeholder={'0.00'} variant={'outlined'}/>
                            <FormControl fullWidth component={TextField}
                                         InputProps={{startAdornment:(<InputAdornment position={'start'}>
                                                 <Typography component={'span'} color={'text.disabled'}>$</Typography>
                                             </InputAdornment>)}}
                                         label={'Sales Price'} placeholder={'0.00'} variant={'outlined'}/>

                            <FormControlLabel control={<Switch/>}
                                              label={<Typography variant={'body2'}>Price includes tax</Typography>}/>
                        </CardContent>
                    </Card>
                    <Button size={'large'} fullWidth variant={'contained'}>Create Product</Button>
                </Stack>
            </Grid2>
        </Grid2>
    </Container>
}


