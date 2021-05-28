import {
  data,
  height,
  gridOptions,
  sharedOptions,
  stackedGridOptions
} from './chart';

export default [
  {
    type: 'bar',
    title: 'Daily Signups',
    subtitle: '+458,90',
    data: data,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  },
  {
    type: 'bar',
    title: 'Daily Withdrawals',
    subtitle: '-46,68',
    data: data,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  },
  {
    type: 'bar',
    title: 'Daily Trades',
    subtitle: '+2,50%',
    data: data,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  }
];
