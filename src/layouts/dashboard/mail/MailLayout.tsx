import Scrollbar from "../../../components/scrollbar/Scrollbar";
import {Divider, Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import {mails, MailType} from "../../../temp/data";
import MailItem from "../../../sections/@dashboard/mail/MailItem";
import MailToolbar from "../../../sections/@dashboard/mail/MailToolbar";
import {searchObject} from "../../../utils/helper";
import {useLocation} from "react-router-dom";
import {useSetOpen} from "../../../pages/MailPage";
import useResponsive from "../../../hooks/useResponsive";


interface MailItemsLayoutProps {
    type?: MailType
}

export default function MailLayout({type}: MailItemsLayoutProps) {
    const isDesktop=useResponsive('up','md')
    const {setOpen } = useSetOpen()
    const {pathname}=useLocation()
    const rowsPerPage = 10
    const [page, setPage] = useState(0)
    const [filterName, setFilterName] = useState('')
    const filteredMail = mails.filter((mail) => type === undefined || mail.type.includes(type)).filter((mail)=>searchObject(mail,filterName))
    useEffect(()=>setPage(0),[pathname])
    return <>
        <Stack sx={{flexGrow: 1}}>
        <MailToolbar
            onOpenNav={()=>setOpen(true)}
            filterName={filterName}
            onFilterName={setFilterName}
            totalMail={filteredMail.length}
            currentMail={[page * rowsPerPage + 1, Math.min((page + 1) * rowsPerPage, filteredMail.length)]}
            onNextPageClick={() => {
                if (page + 1 < filteredMail.length / rowsPerPage) {
                    setPage(prevState => (prevState + 1))
                }
            }}
            onPreviousPageClick={() => {
                if (page > 0) {
                    setPage(prevState => (prevState - 1))
                }
            }}
        />
        <Divider variant={'fullWidth'}/>
            <Scrollbar>
            <Stack sx={{
                width:{md:960},

            }}>

                {
                    filteredMail.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((mail, index) => (
                        <MailItem key={index} isDesktop={isDesktop} mail={mail}/>
                    ))
                }

            </Stack>
        </Scrollbar>
    </Stack></>
}