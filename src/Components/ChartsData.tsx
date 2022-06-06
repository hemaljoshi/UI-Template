import { faker } from '@faker-js/faker';

const lineChartlabels = [
  '9:00AM',
  '12:00AM',
  '3:00PM',
  '6:00PM',
  '9:00PM',
  '12:00PM',
  '3:00AM',
];

const barChartlabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
];

export const pieChartData = {
  labels: ['Open', 'Bounce', 'Unsubcribe'],
  datasets: [
    {
      label: '# of Votes',
      data: [40, 20, 40],
      backgroundColor: [
        'rgb(29, 199, 234)',
        'rgb(251, 64, 75)',
        'rgb(255, 165, 52)',
      ],
      borderColor: [
        'rgb(29, 199, 234)',
        'rgb(251, 64, 75)',
        'rgb(255, 165, 52)',
      ],
      borderWidth: 1,
    },
  ],
};

export const barChartdata = {
  labels: barChartlabels,
  datasets: [
    {
      label: 'Tesla Model S',
      data: barChartlabels.map(() =>
        faker.datatype.number({ min: 0, max: 900 })
      ),
      backgroundColor: 'rgb(29, 199, 234)',
    },
    {
      label: 'BMW 5 Series',
      data: barChartlabels.map(() =>
        faker.datatype.number({ min: 0, max: 900 })
      ),
      backgroundColor: 'rgb(251, 64, 75)',
    },
  ],
};

export const lineChartData = {
  labels: lineChartlabels,
  datasets: [
    {
      label: 'Open',
      data: lineChartlabels.map(() =>
        faker.datatype.number({ min: 0, max: 800 })
      ),
      borderColor: 'rgb(29, 199, 234)',
      backgroundColor: 'rgb(29, 199, 234)',
      tension: 0.3,
    },
    {
      label: 'Click',
      data: lineChartlabels.map(() =>
        faker.datatype.number({ min: 0, max: 800 })
      ),
      borderColor: 'rgb(251, 64, 75)',
      backgroundColor: 'rgb(251, 64, 75)',
      tension: 0.3,
    },
    {
      label: 'Click Second Time',
      data: lineChartlabels.map(() =>
        faker.datatype.number({ min: 0, max: 800 })
      ),
      borderColor: 'rgb(255, 165, 52)',
      backgroundColor: 'rgb(255, 165, 52)',
      tension: 0.3,
    },
  ],
};

export const lineChartoptions = {
  responsive: true,
  elements: {
    line: {
      borderJoinStyle: 'round' as const,
    },
    point: {
      radius: 5,
    },
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      align: 'start' as const,
      labels: {
        pointStyle: 'circle' as const,
        usePointStyle: true,
        color: '#000000',
        font: { size: 14 },
      },
    },
    datalabels: {
      display: false,
    },
  },
};

export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      align: 'start' as const,
      labels: {
        pointStyle: 'circle',
        usePointStyle: true,
        color: '#000000',
        font: { size: 14 },
      },
    },
    datalabels: {
      display: false,
    },
  },
};

export const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      align: 'start' as const,
      labels: {
        pointStyle: 'circle',
        usePointStyle: true,
        color: '#000000',
        font: { size: 14 },
      },
    },
    datalabels: {
      formatter: (value: any) => {
        return value + '%';
      },
    },
  },
};
