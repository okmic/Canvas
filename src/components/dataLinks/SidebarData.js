import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
  },
  {
    title: 'Messages',
    path: '/dialogs',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
    
  },
  {
    title: 'News',
    path: '/News',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks:'linkSideDec'
  },
  {
    title: 'Setting',
    path: '/Setting',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
    },
 {
    title: 'Log in / Log out',
    path: '/login',
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
  }
  

];
