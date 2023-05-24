import {Button, Card, CardActions, CardContent, Stack} from "@mui/material";
import {UserActivityNotificationSection} from "../../../../sections/@dashboard/user";
import {faker} from "@faker-js/faker";
import {useRef} from "react";

export default function NotificationTab() {
    const activityNotification=[{
        type:'comment',
        label:'Email me when someone comments on my article',
        status:faker.datatype.boolean(),
    },{
        type:'reply',
        label:'Email me when someone reply to my comments',
        status:faker.datatype.boolean(),
    },{
        type:'follow',
        label:'Email me when someone follows me',
        status:faker.datatype.boolean(),
    },]
    const applicationNotification=[{
        type:'news',
        label:'News and announcements',
        status:faker.datatype.boolean(),
    },{
        type:'product',
        label:'Weekly product updates',
        status:faker.datatype.boolean(),
    },{
        type:'blog',
        label:'Weekly product updates',
        status:faker.datatype.boolean(),
    },]

    const currentStatus =useRef<{ [key: string]: boolean }>({})
    const handleStatusChange=(type:string,status:boolean)=>{
        currentStatus.current[type]=status
    }
    return (<>
        <Card>
            <CardContent component={Stack} spacing={5}>
                <UserActivityNotificationSection
                    heading={'Activity'}
                    notifications={activityNotification}
                    onStatusChange={handleStatusChange}
                />
                <UserActivityNotificationSection
                    heading={'Application'}
                    notifications={applicationNotification}
                    onStatusChange={handleStatusChange}
                />

            </CardContent>
            <CardActions sx={{
                justifyContent: 'flex-end',
                padding: 3,
                paddingTop: 2
            }}>
                <Button variant={'contained'} onClick={()=>{
                    console.log(currentStatus.current)
                }}>Save Changes</Button>
            </CardActions>
        </Card>
    </>)
}