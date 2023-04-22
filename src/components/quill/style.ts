import {styled} from "@mui/material";
import ReactQuill from "react-quill";
import palette from "../../theme/paletteOptions";

const StyledQuill = styled(ReactQuill)(() => ({
    '& .ql-container': {
        '& .ql-editor': {
            minHeight: '200px', maxHeight: '600px'
        },
    },
    '& .ql-snow .ql-picker': {

        fontFamily: 'Public Sans, sans-serif',
        fontsize: '14px',
        fontWeight: '600',
        color: palette.grey["800"],
        textSizeAdjust: '100%'
    },
    '& .ql-snow.ql-toolbar button': {
        color: palette.grey["800"],
        padding: '2px',
        borderRadius: '4px',

    },
    '& .ql-snow .ql-stroke': {
        stroke: palette.grey["800"],
    }
}))

export default StyledQuill