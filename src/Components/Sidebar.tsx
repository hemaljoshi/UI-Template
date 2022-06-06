import React, { Component } from 'react';
import { Location } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Avatar,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { withRouter } from '../RouterHOC/withRoute';

const userAvatarStyle = {
  mr: 2,
  height: '34px',
  width: '34px',
  border: '2px solid hsla(0,0%,100%,.3)',
};

interface MyProps {
  items: any[];
  location: Location;
}

interface props {
  item: any;
  location: Location;
}

interface MyState {
  collapsed: boolean;
  active: boolean;
}

class SidebarItem extends Component<props, MyState> {
  constructor(props: props) {
    super(props);
    this.state = {
      collapsed: false,
      active: false,
    };
  }

  location = this.props.location;
  onClickProp = this.props.item.onClick;
  label = this.props.item.label;
  Icon = this.props.item.Icon;
  items = this.props.item.items;
  initials = this.props.item.initials;
  img = this.props.item.img;
  path = this.props.item.path;

  toggleCollapse() {
    this.setState((prevValue) => ({
      collapsed: !prevValue.collapsed,
    }));
  }

  onClick = (path: any) => {
    if (Array.isArray(this.items)) {
      this.toggleCollapse();
    }
    if (this.onClickProp) {
      this.onClickProp(path);
    }
  };

  expandIcon: any;

  render() {
    if (Array.isArray(this.items) && this.items.length) {
      this.expandIcon = !this.state.collapsed ? (
        <ExpandLessIcon />
      ) : (
        <ExpandMoreIcon />
      );
    }

    return (
      <>
        <List sx={{ mx: 1, py: 0.4 }}>
          <ListItem
            onClick={(e) => this.onClick(this.path)}
            button
            sx={{
              p: 1,
              background:
                window.location.pathname === this.path
                  ? 'hsla(0,0%,100%,.23)'
                  : 'inherit',
              borderRadius: 1,
              ':hover': {
                background:
                  window.location.pathname === this.path
                    ? 'hsla(0,0%,100%,.23)'
                    : 'hsla(0,0%,100%,.13)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {this.img ? (
                <Avatar src={`${this.img}`} sx={userAvatarStyle} />
              ) : this.Icon ? (
                <this.Icon />
              ) : (
                this.initials
              )}
            </ListItemIcon>
            <ListItemText>{this.label}</ListItemText>
            {this.expandIcon}
          </ListItem>
          <Collapse in={this.state.collapsed} timeout='auto' unmountOnExit>
            {Array.isArray(this.items) ? (
              <List component='div' disablePadding sx={{ mx: 2 }}>
                {this.items.map((subItem, index) => (
                  <React.Fragment key={`${subItem.name}${index}`}>
                    {subItem === 'divider' ? (
                      <Divider sx={{ backgroundColor: 'hsla(0,0%,100%,.3)' }} />
                    ) : (
                      <SidebarItem
                        item={subItem}
                        location={this.props.location}
                      />
                    )}
                  </React.Fragment>
                ))}
              </List>
            ) : null}
          </Collapse>
        </List>
      </>
    );
  }
}

class Sidebar extends Component<MyProps> {
  location = this.props.location;
  render() {
    return (
      <List disablePadding dense>
        {this.props.items?.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem?.name}${index}`}>
            {sidebarItem === 'divider' ? (
              <Divider sx={{ backgroundColor: 'hsla(0,0%,100%,.3)' }} />
            ) : (
              <SidebarItem item={sidebarItem} location={this.location} />
            )}
          </React.Fragment>
        ))}
      </List>
    );
  }
}

export default withRouter(Sidebar);
