import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"

    },
    {
        title: "Grades",
        icon: <SchoolIcon />,
        link: "/grades"

    },
    {
        title: "Account",
        icon: <PersonOutlineIcon />,
        link: "/account"

    },
    {
        title: "LogOut",
        icon: <ExitToAppIcon />,
        link: "/login"

    }


] 

