import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Checkbox,
  IconButton,
  Link,
} from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
} from 'chart.js';
import {
  barChartOptions,
  barChartdata,
  lineChartData,
  lineChartoptions,
  pieChartData,
  pieChartOptions,
} from './ChartsData';
import {
  cardStyle,
  BootstrapTooltip,
  cardFooterBoxStyle,
  cardFooterTextStyle,
  footerBoxStyle,
  footerLinkBoxStyle,
  footerLinkStyle,
  footerRightsStyle,
  styledIcon,
  subTitleStyle,
  titleStyle,
  checkBoxStyle,
  dividerStyle,
  editIconStyle,
  removeIconStyle,
  widgetFooterStyle,
  widgetFooterTextStyle,
  widgetIconSize,
  widgetImgIconStyle,
  widgetTextStyle,
} from './DashboardCustomStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ChartDataLabels from 'chartjs-plugin-datalabels';

import ReplayIcon from '@mui/icons-material/Replay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import HistoryIcon from '@mui/icons-material/History';

import pieIcon from '../assets/img/doughnut_chart.svg';
import torchIcon from '../assets/img/torch.svg';
// import mapImg from '../assets/img/map.png';
import vectorIcon from '../assets/img/vector.svg';
import USA from '../assets/img/usa.png';
import Germany from '../assets/img/Germany.png';
import Australia from '../assets/img/Australia.png';
import UK from '../assets/img/uk.png';
import Romania from '../assets/img/Romania.png';
import Brasil from '../assets/img/Brasil.png';

import { VectorMap } from '@react-jvectormap/core';
import { mapPath, mapvalues } from './MapData';

import TaskModal from './TaskModal';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title
);

interface MyState {
  openModal: boolean;
  itemId: number;
  checked: boolean;
  title: string;
  taskData: any[];
}

export default class Dashboard extends Component {
  state: MyState = {
    openModal: false,
    itemId: 0,
    checked: false,
    title: '',
    taskData: [
      {
        id: 1,
        checked: true,
        title: 'Sign contract for "What are conference organizers afraid of?"',
      },
      {
        id: 2,
        checked: true,
        title: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      },
      {
        id: 3,
        checked: false,
        title:
          'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      },
      {
        id: 4,
        checked: true,
        title: 'Create 4 Invisible User Experiences you Never Knew About',
      },
      {
        id: 5,
        checked: true,
        title: 'Read "Following makes Medium better"',
      },
      {
        id: 6,
        checked: false,
        title: 'Unfollow 5 enemies from twitter',
      },
    ],
  };

  editTask = (itemId: number) => {
    const temp = [...this.state.taskData];

    const index = temp.findIndex((data) => data.id === itemId);
    temp[index].title = this.state.title;
    temp[index].checked = this.state.checked;
    this.setState({
      taskData: temp,
    });

    this.handleClose();
  };

  removeTask = (itemId: number) => {
    const temp = [...this.state.taskData];
    const filtterdTask = temp.filter((data) => data.id !== itemId);
    this.setState({
      taskData: filtterdTask,
    });
  };

  handleOpen = (item: any) => {
    this.setState({
      openModal: true,
      checked: item.checked,
      title: item.title,
      itemId: item.id,
    });
  };

  handleClose = () => {
    this.setState({
      openModal: false,
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      checked: event.target.checked,
    });
  };

  onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: event.target.value,
    });
  };

  createData(name: string, img: string, numbers: string, percent: string) {
    return { name, img, numbers, percent };
  }

  render() {
    const rows = [
      this.createData('USA', `${USA}`, '2.920', '53.23%'),
      this.createData('Germany', `${Germany}`, '1.300', '20.43%'),
      this.createData('Australia', `${Australia}`, '760', '10.35%'),
      this.createData('United Kingdom', `${UK}`, '690', '7.87%'),
      this.createData('Romania', `${Romania}`, '600', '5.94%'),
      this.createData('Brasil', `${Brasil}`, '550', '4.34%'),
    ];

    return (
      <>
        <Box sx={{ p: 4 }}>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Paper sx={cardStyle} elevation={0}>
                    <Stack
                      direction={'row'}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      justifyContent='space-between'
                      sx={{ mb: 3 }}
                    >
                      <Box sx={widgetIconSize}>
                        <img
                          src={`${pieIcon}`}
                          alt='pie icon'
                          style={widgetImgIconStyle}
                        />
                      </Box>
                      <Box sx={{ display: 'block' }}>
                        <Typography sx={widgetFooterTextStyle}>
                          Number
                        </Typography>
                        <Typography sx={widgetTextStyle}>150GB</Typography>
                      </Box>
                    </Stack>
                    <Divider />
                    <Box sx={widgetFooterStyle}>
                      <ReplayIcon style={styledIcon} />
                      <Typography sx={widgetFooterTextStyle}>
                        Update now?
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Paper sx={cardStyle} elevation={0}>
                    <Stack
                      direction={'row'}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      justifyContent='space-between'
                      sx={{ mb: 3 }}
                    >
                      <Box sx={widgetIconSize}>
                        <img
                          src={`${torchIcon}`}
                          alt='Torch icon'
                          style={widgetImgIconStyle}
                        />
                      </Box>
                      <Box sx={{ display: 'block' }}>
                        <Typography sx={widgetFooterTextStyle}>
                          Revenue
                        </Typography>
                        <Typography sx={widgetTextStyle}>$ 1,345</Typography>
                      </Box>
                    </Stack>
                    <Divider />
                    <Box sx={widgetFooterStyle}>
                      <CalendarMonthIcon style={styledIcon} />
                      <Typography sx={widgetFooterTextStyle}>
                        Last day
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Paper sx={cardStyle} elevation={0}>
                    <Stack
                      direction={'row'}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      justifyContent='space-between'
                      sx={{ mb: 3 }}
                    >
                      <Box sx={widgetIconSize}>
                        <img
                          src={`${vectorIcon}`}
                          alt='pie icon'
                          style={widgetImgIconStyle}
                        />
                      </Box>
                      <Box sx={{ display: 'block' }}>
                        <Typography sx={widgetFooterTextStyle}>
                          Errors
                        </Typography>
                        <Typography sx={widgetTextStyle}>23</Typography>
                      </Box>
                    </Stack>
                    <Divider />
                    <Box sx={widgetFooterStyle}>
                      <AccessTimeIcon style={styledIcon} />
                      <Typography sx={widgetFooterTextStyle}>
                        In the last hour
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Paper sx={cardStyle} elevation={0}>
                    <Stack
                      direction={'row'}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      justifyContent='space-between'
                      sx={{ mb: 3 }}
                    >
                      <Box sx={widgetIconSize}>
                        <FavoriteBorderOutlinedIcon
                          sx={{
                            height: '100%',
                            width: '100%',
                            color: '#1d62f0',
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'block' }}>
                        <Typography sx={widgetFooterTextStyle}>
                          Followers
                        </Typography>
                        <Typography sx={widgetTextStyle}>+45K</Typography>
                      </Box>
                    </Stack>
                    <Divider />
                    <Box sx={widgetFooterStyle}>
                      <ReplayIcon style={styledIcon} />
                      <Typography sx={widgetFooterTextStyle}>
                        Update now?
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: 3 }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Paper elevation={0} sx={cardStyle}>
                <Grid
                  container
                  sx={{ p: 1 }}
                  spacing={{ xs: 2, md: 3 }}
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Grid item lg={7} md={7} sm={7} xs={12}>
                    <Box>
                      <Typography variant='h5' sx={titleStyle}>
                        Global Sales by Top Locations
                      </Typography>
                      <Typography variant='subtitle2' sx={subTitleStyle}>
                        All products that were shipped
                      </Typography>
                    </Box>
                    <Divider sx={dividerStyle} />
                    <TableContainer>
                      <Table>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell align='left'>
                                <Avatar
                                  src={`${row.img}`}
                                  variant='square'
                                  sx={{ width: 22, height: 15 }}
                                />
                              </TableCell>
                              <TableCell align='left'>{row.name}</TableCell>
                              <TableCell align='right'>{row.numbers}</TableCell>
                              <TableCell align='right'>{row.percent}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={12}>
                    {/* <Box>
                      <img
                        src={`${mapImg}`}
                        style={widgetImgIconStyle}
                        alt='map'
                      />
                    </Box> */}
                    <Box
                      style={{
                        width: '100%',
                        height: '50vh',
                      }}
                    >
                      <VectorMap
                        backgroundColor='transparent'
                        map={{
                          content: {
                            height: 440.7063107441331,
                            insets: [
                              {
                                bbox: [
                                  {
                                    x: -20004297.151525836,
                                    y: -12671671.123330014,
                                  },
                                  {
                                    x: 20026572.394749384,
                                    y: 6930392.025135122,
                                  },
                                ],
                                height: 440.7063107441331,
                                left: 0,
                                top: 0,
                                width: 900,
                              },
                            ],
                            paths: mapPath,
                            projection: {
                              centralMeridian: 11.5,
                              type: 'mill',
                            },
                            width: 900,
                          },
                          name: 'world_mill',
                        }}
                        onRegionTipShow={function noRefCheck() {}}
                        series={{
                          regions: [
                            {
                              normalizeFunction: 'polynomial',
                              scale: ['#146804', '#ff0000'],
                              values: mapvalues,
                            },
                          ],
                        }}
                        regionStyle={{
                          initial: {
                            fill: '#e4e4e4',
                            fillOpacity: 0.9,
                            stroke: 'none',
                            strokeWidth: '0',
                            strokeOpacity: '0',
                          },
                          hover: {
                            fillOpacity: 0.8,
                            cursor: 'pointer',
                          },
                          selected: {
                            color: '#000',
                          },
                          selectedHover: {},
                        }}
                        className='map'
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: 3 }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent='space-between'
              >
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Paper elevation={0} sx={cardStyle}>
                    <Box>
                      <Typography variant='h5' sx={titleStyle}>
                        Email Statistics
                      </Typography>
                      <Typography variant='subtitle2' sx={subTitleStyle}>
                        Last Campaign Performance
                      </Typography>
                    </Box>
                    <Box sx={{ p: 4 }}>
                      <Pie data={pieChartData} options={pieChartOptions} />
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={cardFooterBoxStyle}>
                      <AccessTimeIcon fontSize='small' />
                      <Typography
                        component='p'
                        variant='subtitle2'
                        sx={cardFooterTextStyle}
                      >
                        Last Campaign Performance
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                  <Paper elevation={0} sx={cardStyle}>
                    <Box>
                      <Typography variant='h5' sx={titleStyle}>
                        Users Behavior
                      </Typography>
                      <Typography variant='subtitle2' sx={subTitleStyle}>
                        24 Hours performance
                      </Typography>
                    </Box>
                    <Box sx={{ px: 4, py: 1.5 }}>
                      <Line options={lineChartoptions} data={lineChartData} />
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={cardFooterBoxStyle}>
                      <HistoryIcon fontSize='small' />
                      <Typography
                        component='p'
                        variant='subtitle2'
                        sx={cardFooterTextStyle}
                      >
                        Updated 3 minutes ago
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: 3 }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent='space-between'
              >
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Paper elevation={0} sx={cardStyle}>
                    <Box>
                      <Typography variant='h5' sx={titleStyle}>
                        2017 Sales
                      </Typography>
                      <Typography variant='subtitle2' sx={subTitleStyle}>
                        All products including Taxes
                      </Typography>
                    </Box>
                    <Box sx={{ px: 4, py: 1.5 }}>
                      <Bar options={barChartOptions} data={barChartdata} />
                    </Box>
                    <Divider sx={dividerStyle} />
                    <Box sx={cardFooterBoxStyle}>
                      <CheckIcon fontSize='small' />
                      <Typography
                        component='p'
                        variant='subtitle2'
                        sx={cardFooterTextStyle}
                      >
                        Data information certified
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Paper elevation={0} sx={cardStyle}>
                    <Box>
                      <Typography variant='h5' sx={titleStyle}>
                        Tasks
                      </Typography>
                      <Typography variant='subtitle2' sx={subTitleStyle}>
                        Backend development
                      </Typography>
                    </Box>
                    <Box sx={{ my: 1 }}>
                      {this.state.taskData.map((data) => (
                        <React.Fragment key={data.id}>
                          <Divider />
                          <Stack
                            direction='row'
                            spacing={1}
                            alignItems='center'
                            justifyContent='space-between'
                            sx={{ my: 1 }}
                            key={data.id}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Checkbox
                                checked={data.checked}
                                sx={checkBoxStyle}
                              />
                              <Typography>{data.title}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                              <BootstrapTooltip
                                title='Edit Task..'
                                placement='top'
                              >
                                <IconButton
                                  sx={editIconStyle}
                                  onClick={() => this.handleOpen(data)}
                                >
                                  <FontAwesomeIcon
                                    icon='pen-to-square'
                                    size='xs'
                                  />
                                </IconButton>
                              </BootstrapTooltip>

                              <BootstrapTooltip
                                title='Remove..'
                                placement='top'
                              >
                                <IconButton
                                  sx={removeIconStyle}
                                  onClick={() => this.removeTask(data.id)}
                                >
                                  <ClearIcon />
                                </IconButton>
                              </BootstrapTooltip>
                            </Box>
                          </Stack>
                        </React.Fragment>
                      ))}
                      <Divider sx={{ borderWidth: '0.8px', mt: 4 }} />
                      <Box sx={cardFooterBoxStyle}>
                        <Typography
                          component='p'
                          variant='subtitle2'
                          sx={cardFooterTextStyle}
                        >
                          Updated 3 minutes ago
                        </Typography>
                      </Box>
                      <TaskModal
                        open={this.state.openModal}
                        handleClose={this.handleClose}
                        itemId={this.state.itemId}
                        checked={this.state.checked}
                        title={this.state.title}
                        handleChange={this.handleChange}
                        onChangeTitle={this.onChangeTitle}
                        editTask={this.editTask}
                      />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/* Footer */}
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mb: 0, mx: 0, mt: 5 }}
        >
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ backgroundColor: '#fff' }}
          >
            <Box sx={{ borderTop: '1px solid #e7e7e7' }}>
              <Box sx={footerBoxStyle}>
                <Box sx={footerLinkBoxStyle}>
                  <Link sx={footerLinkStyle} href='#'>
                    Home
                  </Link>
                  <Link sx={footerLinkStyle} href='#'>
                    Company
                  </Link>
                  <Link sx={footerLinkStyle} href='#'>
                    Portfolio
                  </Link>
                  <Link sx={footerLinkStyle} href='#'>
                    Blog
                  </Link>
                </Box>
                <Box sx={footerRightsStyle}>
                  <Typography sx={{ mx: 1 }}>
                    {`© `}
                    <Link
                      href='https://www.extwebtech.com/'
                      sx={{ textDecoration: 'none', color: '#23ccef' }}
                    >
                      Extended WebApp
                    </Link>
                    , made with love for a better web
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
}
