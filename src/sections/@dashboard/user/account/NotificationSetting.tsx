import {NotificationSettingProps} from "./types";
import {useState} from "react";
import {FormControlLabel, FormGroup, Switch, Typography} from "@mui/material";

export default function NotificationSetting({heading, notifications, onStatusChange}: NotificationSettingProps) {
    const statusMap = () => {
        const initialSwitchStates = new Map<string, boolean>();
        notifications.forEach((activity) => {
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

    return <FormGroup>
        <Typography mb={2} color={'text.secondary'} variant={'overline'}>{heading}</Typography>
        {
            notifications.map(({type, status, label},index)=>(
            <FormControlLabel
                slotProps={{typography:{variant:'body2'}}}
                key={index}
                control={
                <Switch
                    checked={switchStates.get(type)}
                    value={type}
                    onChange={(_,checked)=>handleSwitchClick(type,checked)}
                />}
                label={label}/>
            ))
        }
    </FormGroup>
}