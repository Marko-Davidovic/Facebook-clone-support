import { ExpandMoreOutlined } from '@material-ui/icons'
import React from 'react'
import SidebarRow from "./SidebarRow"
import LocaHospotalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StoreFrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
// import userEvent from '@testing-library/user-event'
import {useStateValue} from "./StateProvider"

function Sidebar() {
    const [{user}] = useStateValue();
    return (
        <div className="Sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocaHospotalIcon} title="COVID-19 Information Centar"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StoreFrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

        </div>
    )
}

export default Sidebar
