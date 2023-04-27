import {Box, Container, Stack, Typography} from "@mui/material";
import Breadcrumbs from "../../../sections/navigation/Breadcrumbs";
import {userCards} from "../../../temp/data";
import {UserCardSection} from "../../../sections/@dashboard/user";

export default function UserCards(){
    return <Container maxWidth={'lg'}>
        <Stack spacing={1} mb={5}>
            <Typography variant={'h4'}>User Cards</Typography>
            <Breadcrumbs list={[{label: 'Dashboard', link: '/'}, {
                label: 'User',
                link: '/dashboard/users'
            }, {label: 'Cards', link: ''}]}/>
        </Stack>
        <Box sx={{
            display:'grid',
            gap:3,
            gridTemplateColumns: {xs : 'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)'},
        }}>
            {userCards.map((user,index)=>(
                <UserCardSection key={index}  user={user}/>
            ))}
        </Box>
    </Container>
}