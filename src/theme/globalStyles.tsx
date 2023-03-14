import {GlobalStyles as MUIGlobalStyles} from '@mui/material';


export default function GlobalStyles() {
    return <MUIGlobalStyles styles={{
        '*': {
            boxSizing: 'border-box'
        },
        html: {
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            WebkitOverflowScrolling: 'touch',

        },
        body: {
            backgroundColor:'white',
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
        },
        '#root': {
            width: '100%',
            height: '100%',
        },
        input: {
            '&[type=number]': {
                MozAppearance: 'textfield',
            },
            '&::-webkit-outer-spin-button': {
                margin: 0,
                WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
                margin: 0,
                WebkitAppearance: 'none',
            },
            //To remove clear icon
            '&[type=search]': {
                '&::-webkit-search-decoration': {
                    display: "none"
                },
                '&::-webkit-search-cancel-button': {
                    display: "none"
                },
                '&::-webkit-search-results-button': {
                    display: "none"
                },
                '&::-webkit-search-results-decoration': {
                    display: "none"
                }
            }


        },

        ul: {
            margin: 0,
            padding: 0,
        },
    }}/>
}