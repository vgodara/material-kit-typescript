import {Main, StyledRoot} from "./styles";
import {useState} from "react";
import {Header} from "./header";
import {Nav} from "./nav";
import {Outlet} from "react-router-dom";


export default function DashboardLayout() {
    const [open, setOpen] = useState(false);
return <>
    <StyledRoot>
        <Header onOpenNav={() => setOpen(true)} />

        <Nav openNav={open} onCloseNav={() => setOpen(false)} />
        <Main>
            <Outlet/>
        </Main>
    </StyledRoot>
</>
}