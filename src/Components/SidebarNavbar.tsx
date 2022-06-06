import React from 'react';
import {
  Badge,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import sideBarBg from '../assets/img/sidebar_background.png';
import logo from '../assets/img/logo.svg';
import PlanetIcon from '../assets/img/planet-alt-svgrepo-com.svg';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SidebarController from './SidebarController';

const drawerWidth = 260;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const hamBurgerIconButtonStyle = {
  color: 'white',
  mr: 2,
  fontWeight: 900,
  backgroundColor: '#343a40',
  ':hover': {
    backgroundColor: '#1d2124',
  },
};

const searchTextFieldStyle = {
  ml: 2,
  '& .MuiOutlinedInput-root': {
    paddingLeft: 0,
    '& fieldset': {
      border: 'none',
    },
  },
};

const notificationPopupStyle = {
  overflow: 'visible',
  borderRadius: 2,
  border: '1px solid rgba(0,0,0,.15)',
  filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.32))',
  mt: 1,
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1,
  },
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: -1,
    right: 10,
    width: 12,
    height: 12,
    bgcolor: 'background.paper',
    transform: 'translateY(-50%) rotate(45deg)',
    borderLeft: '1px solid rgba(0,0,0,.15)',
    borderTop: '1px solid rgba(0,0,0,.15)',
    zIndex: 0,
  },
};

const menuPopupStyle = {
  overflow: 'visible',
  borderRadius: 2,
  border: '1px solid rgba(0,0,0,.15)',
  filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.32))',
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 55,
    right: 38,
    width: 15,
    height: 15,
    bgcolor: 'background.paper',
    borderLeft: '1px solid rgba(0,0,0,.15)',
    borderTop: '1px solid rgba(0,0,0,.15)',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 1,
  },
};

const appBarStyle = {
  backgroundColor: 'white',
  color: 'black',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0,0,0,.1)',
};

const drawerStyle = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    backgroundImage: `url(${sideBarBg})`,
    backgroundPositionX: '50%',
    backgroundPositionY: '50%',
    backgroundSize: 'cover',
    width: drawerWidth,
    boxSizing: 'border-box',
    color: 'white',
  },
};

const badgeStyle = {
  '& .MuiBadge-badge': {
    fontWeight: 700,
    backgroundColor: '#fb404b',
  },
};

interface MyProps {
  children: React.ReactNode;
}

type MyState = {
  openDrawer: boolean;
  anchorEl: null | HTMLElement;
  anchorElNav: null | HTMLElement;
};

export default class SidebarNavbar extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      openDrawer: false,
      anchorEl: null,
      anchorElNav: null,
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      openDrawer: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      openDrawer: false,
    });
  };

  handleNotificationOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event?.currentTarget,
    });
  };

  handleNotificationClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleNavMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorElNav: event?.currentTarget,
    });
  };

  handleNavMenuClose = () => {
    this.setState({
      anchorElNav: null,
    });
  };

  componentDidMount() {
    if (window.innerWidth < 500) {
      this.setState({
        openDrawer: false,
      });
    } else {
      this.setState({
        openDrawer: true,
      });
    }
  }

  render() {
    const openDrawer = this.state.openDrawer;
    const anchorEl = this.state.anchorEl;
    const anchorElNav = this.state.anchorElNav;
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={openDrawer} sx={appBarStyle}>
          <Toolbar>
            <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
              <IconButton
                aria-label='open drawer'
                onClick={
                  !openDrawer ? this.handleDrawerOpen : this.handleDrawerClose
                }
                edge='start'
                sx={hamBurgerIconButtonStyle}
              >
                {!openDrawer ? (
                  <>
                    <MenuIcon sx={{ display: { sm: 'block', xs: 'none' } }} />
                    <ChevronRightIcon
                      sx={{ display: { sm: 'none', xs: 'block' } }}
                    />
                  </>
                ) : (
                  <>
                    <MoreVertIcon
                      sx={{ display: { sm: 'block', xs: 'none' } }}
                    />
                    <ChevronLeftIcon
                      sx={{ display: { sm: 'none', xs: 'block' } }}
                    />
                  </>
                )}
              </IconButton>
              {/* Heading and search for Desktop screens */}
              <Stack
                direction={'row'}
                alignItems='center'
                sx={{ display: { sm: 'flex', xs: 'none' } }}
              >
                <Typography
                  variant='h6'
                  noWrap
                  component='div'
                  sx={{ color: '#888888' }}
                >
                  Dashboard
                </Typography>
                <TextField
                  variant='outlined'
                  placeholder='Search...'
                  sx={searchTextFieldStyle}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Box>
            {/* Icons for desktop screens */}
            <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>
              <IconButton>
                <img src={PlanetIcon} alt='' />
              </IconButton>
              <IconButton
                onClick={this.handleNotificationOpen}
                size='small'
                aria-controls={Boolean(anchorEl) ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
              >
                <Badge
                  badgeContent={'5'}
                  color='error'
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  overlap='circular'
                  sx={badgeStyle}
                >
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <FormatListBulletedIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={Boolean(anchorEl)}
                onClose={this.handleNotificationClose}
                onClick={this.handleNotificationClose}
                PaperProps={{
                  elevation: 0,
                  sx: notificationPopupStyle,
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>Notification 1</MenuItem>
                <MenuItem>Notification 2</MenuItem>
                <MenuItem>Notification 3</MenuItem>
                <MenuItem>Notification 4</MenuItem>
                <MenuItem>Notification 5</MenuItem>
              </Menu>
            </Box>
            {/* Icons and Search for mobile screens */}
            <Box sx={{ display: { md: 'none', sm: 'block', xs: 'block' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={this.handleNavMenuOpen}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={this.handleNavMenuClose}
                sx={menuPopupStyle}
              >
                <MenuItem>
                  <TextField
                    variant='outlined'
                    placeholder='Search...'
                    sx={searchTextFieldStyle}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </MenuItem>
                {/* <MenuItem>
                  <IconButton>
                    <img src={PlanetIcon} alt='' />
                  </IconButton>
                </MenuItem> */}
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <IconButton>
                    <img src={PlanetIcon} alt='' />
                  </IconButton>
                  <IconButton
                    onClick={this.handleNotificationOpen}
                    size='small'
                    aria-controls={
                      Boolean(anchorEl) ? 'account-menu' : undefined
                    }
                    aria-haspopup='true'
                    aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                  >
                    <Badge
                      badgeContent={'5'}
                      color='error'
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      overlap='circular'
                      sx={badgeStyle}
                    >
                      <NotificationsNoneOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <FormatListBulletedIcon />
                  </IconButton>
                </MenuItem>
                {/* <MenuItem>
                  <IconButton>
                    <FormatListBulletedIcon />
                  </IconButton>
                </MenuItem> */}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={drawerStyle}
          variant='persistent'
          anchor='left'
          open={openDrawer}
        >
          <DrawerHeader>
            <img
              src={`${logo}`}
              style={{
                width: '40px',
                marginRight: 4,
              }}
              alt='logo'
            />
            <Typography
              sx={{ cursor: 'pointer', fontSize: '1.125rem', fontWeight: 400 }}
            >
              CREATIVE TIM
            </Typography>
          </DrawerHeader>
          <Divider sx={{ mx: 2, backgroundColor: 'hsla(0,0%,100%,.3)' }} />
          <SidebarController />
        </Drawer>
        <Main
          open={openDrawer}
          sx={{
            display: {
              sm: 'block',
              xs: `${openDrawer ? 'none' : 'block'}`,
            },
            p: 0,
          }}
        >
          <DrawerHeader />
          {this.props.children}
        </Main>
      </Box>
    );
  }
}
