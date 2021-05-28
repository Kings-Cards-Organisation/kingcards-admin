import {
    signupData,
    withdrawalData,
    tradesData,
    signinData,
    withdrawalVolumeData,
    tradeVolumeData,
    height,
    options,
    gridOptions,
    sharedOptions,
    stackedGridOptions
} from './demoCharts';
  
export default [
    {
      type: 'bar',
      title: 'Daily Signups',
      subtitle: '+458,90',
      data: signupData,
      height: height,
      options: {
        ...options,
        ...sharedOptions,
        ...gridOptions,
        ...stackedGridOptions
      }
    },
    {
      type: 'bar',
      title: 'Daily Withdrawals',
      subtitle: '-46,68',
      data: withdrawalData,
      height: height,
      options: {
        ...options,
        ...sharedOptions,
        ...gridOptions,
        ...stackedGridOptions
      }
    },
    {
      type: 'bar',
      title: 'Daily Trades',
      subtitle: '+2,50%',
      data: tradesData,
      height: height,
      options: {
        ...options,
        ...sharedOptions,
        ...gridOptions,
        ...stackedGridOptions
      }
    },
    {
        type: 'bar',
        title: 'Daily Signins',
        subtitle: '+458,90',
        data: signinData,
        height: height,
        options: {
          ...options,
          ...sharedOptions,
          ...gridOptions,
          ...stackedGridOptions
        }
    },
    {
        type: 'bar',
        title: 'Daily Withdrawal Volume',
        subtitle: '-46,68',
        data: withdrawalVolumeData,
        height: height,
        options: {
          ...options,
          ...sharedOptions,
          ...gridOptions,
          ...stackedGridOptions
        }
    },
    {
        type: 'bar',
        title: 'Daily Trade Volume',
        subtitle: '-46,68',
        data: tradeVolumeData,
        height: height,
        options: {
          ...options,
          ...sharedOptions,
          ...gridOptions,
          ...stackedGridOptions
        }
    },
];
  