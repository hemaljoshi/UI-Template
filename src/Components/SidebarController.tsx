import React, { Component } from 'react';
import { NavigateFunction } from 'react-router-dom';
import defaultAvatar from '../assets/img/default-avatar.png';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import Sidebar from './Sidebar';
import { withRouter } from '../RouterHOC/withRoute';

interface MyProps {
  navigate: NavigateFunction;
}

class SidebarController extends Component<MyProps> {
  onClick = (path: any) => {
    this.props.navigate(`${path}`);
  };

  render() {
    const items = [
      {
        name: 'Tania Andrew',
        label: 'Tania Andrew',
        img: defaultAvatar,
        items: [
          {
            name: 'Profile',
            label: 'Profile',
            initials: 'P',
            path: '/profile',
            onClick: this.onClick,
          },
        ],
      },
      'divider',
      {
        name: 'Dashboard',
        label: 'Dashboard',
        Icon: HomeIcon,
        path: '/',
        onClick: this.onClick,
      },
      {
        name: 'billing',
        label: 'Billing',
        Icon: ReceiptIcon,
        items: [
          {
            name: 'statements',
            label: 'Statements',
            initials: 'S',
            path: '/statements',
            onClick: this.onClick,
          },
          {
            name: 'reports',
            label: 'Reports',
            initials: 'R',
            path: '/reports',
            onClick: this.onClick,
          },
        ],
      },
      'divider',
      {
        name: 'settings',
        label: 'Settings',
        Icon: SettingsIcon,
        items: [
          {
            name: 'insurance',
            label: 'insurance',
            initials: 'I',
            path: '/insurance',
            onClick: this.onClick,
          },
          {
            name: 'schedule',
            label: 'schedule',
            initials: 'S',
            path: '/schedule',
            onClick: this.onClick,
          },
        ],
      },
    ];
    return <Sidebar items={items} />;
  }
}

export default withRouter(SidebarController);
