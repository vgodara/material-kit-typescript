import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {UserUpdateInfoSection, UserUpdateProfilePicSection} from "../../../sections/@dashboard/user";
import {useState} from "react";
import {faker} from "@faker-js/faker";

export default function GeneralTab() {
    const previousImage = faker.image.avatar()
    const wasProfilePublic = faker.datatype.boolean()
    const [newImage, setNewImage] = useState<string | undefined>()
    const [isProfilePublic, setIsProfilePublic] = useState<boolean | undefined>()
    const previousInfo = {
        name: faker.name.fullName(),
        emailAddress: faker.internet.email(),
        aboutMe: faker.lorem.lines(3),
        phoneNumber: faker.phone.number(),
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: faker.address.country(),
        pinCode: faker.address.zipCode(),
    }
    return (<>

        <Box component={'form'}>
            <Grid2 container spacing={3}>
                <Grid2 xs={12} md={4}>
                    <UserUpdateProfilePicSection
                        image={previousImage}
                        isProfilePublic={wasProfilePublic}
                        onImageUpdate={setNewImage}
                        onProfileVisibilityUpdate={setIsProfilePublic}/>
                </Grid2>
                <Grid2 xs={12} md={8}>
                    <UserUpdateInfoSection info={previousInfo} onUpdate={(newInfo) => {
                        console.log(newInfo)
                        newImage && console.log(newImage)
                        isProfilePublic && console.log(isProfilePublic)
                    }}/>
                </Grid2>
            </Grid2>

        </Box>
    </>)
}