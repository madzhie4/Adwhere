import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IoIosSettings, IoIosPaper, IoMdCar, IoMdLogOut, IoMdTrash } from 'react-icons/io';
import { FaEnvelope } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoIosSettings />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaEnvelope />,
    cName: 'nav-text'
  },
  {
    title: 'Drive own car',
    path: '/driveowncar',
    icon: <IoMdCar />,
    cName: 'nav-text'
  },
  {
    title: 'Terms & Conditions',
    path: '/terms-conditions',
    icon: <IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Log out',
    path: '/logout',
    icon: <IoMdLogOut />,
    cName: 'nav-text'
  },
  {
    title: 'Delete account',
    path: '/delete-account',
    icon: <IoMdTrash />,
    cName: 'nav-text'
  }
  
];