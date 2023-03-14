//
import Card from './Card';
import Paper from './Paper';
import Input from './Input';
import Table from './Table';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Autocomplete from './Autocomplete';
import Typography from './Typography';
import {Theme} from "@mui/material";
import Link from "./Link";
import Checkbox from "./CheckBox";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        Typography(theme),
        Card(theme),
        Table(theme),
        Input(theme),
        Paper(theme),
        Button(theme),
        Tooltip(theme),
        Backdrop(theme),
        Autocomplete(theme),
        Link(theme),
        Checkbox(theme),
    );
}
