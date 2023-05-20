import {ActivityNotificationProps} from "./types";
import {useState} from "react";
import {FormControlLabel, Switch, Typography} from "@mui/material";

export default function ActivityNotification({activities,onStatusChange}:ActivityNotificationProps){
    const statusMap=() => {
        const initialSwitchStates = new Map<string, boolean>();
        activities.forEach((activity) => {
            initialSwitchStates.set(activity.type, activity.status);
        });
        return initialSwitchStates;
    }
    const [switchStates, setSwitchStatus] = useState(statusMap);

    const handleSwitchClick = (type: string, status: boolean) => {
        setSwitchStatus((prevState) => {
            const newSwitchStates = new Map(prevState);
            newSwitchStates.set(type, status);
            return newSwitchStates;
        });
        onStatusChange(type, status);
    };

    return <>
        <Typography color={'text.secondary'} variant={'overline'}>Activities</Typography>
        {
            activities.map(({type, status, label},index)=>(<>
            <FormControlLabel
                key={index}
                control={
                <Switch
                    checked={switchStates.get(type)}
                    value={type}
                    onChange={(_,checked)=>handleSwitchClick(type,checked)}
                />}
                label={label}/>
            </>))
        }
    </>
}