const colors = [{
    backgroundColor: '#7986cb',
    borderColor: '#3f51b5',
    pointBackgroundColor: '#3f51b5',
    pointBorderColor: '#fff'
  }, {
    backgroundColor: '#51b53f',
    borderColor: '#3f51b5',
    pointBackgroundColor: '#3f51b5',
    pointBorderColor: '#fff'
  }, {
    backgroundColor: '#f44336',
    borderColor: '#3f51b5',
    pointBackgroundColor: '#3f51b5',
    pointBorderColor: '#fff'
  }, {
    backgroundColor: '#3f51b5',
    borderColor: '#3f51b5',
    pointBackgroundColor: '#3f51b5',
    pointBorderColor: '#fff'
  }, {
    backgroundColor: '#eeeeee',
    borderColor: '#e0e0e0',
    pointBackgroundColor: '#e0e0e0',
    pointBorderColor: '#fff'
  }, {
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff'
  }];

const labels = ['1st may', '2nd may', '3rd may', '4th may', '5th may', '6th may', '7th may'];

const signupDataset = [{
    label: 'signups',
    ...colors[1],
    borderWidth: 0,
    data: [16, 25, 38, 48, 75, 85, 103]
}];

const withdrawalDataset = [{
    label: 'withdrawals',
    ...colors[2],
    borderWidth: 0,
    data: [12, 27, 32, 48, 50, 37, 32]
}];

const tradesDataset = [{
    label: 'trades',
    ...colors[3],
    borderWidth: 0,
    data: [16, 50, 38, 45, 67, 85, 120]
}];

const signinDataset = [{
    label: 'sign-ins',
    ...colors[1],
    borderWidth: 0,
    data: [126, 120, 138, 141, 137, 185, 193]
}];

const withdrawalVolumeDataset = [{
    label: 'withdrawal volume',
    ...colors[2],
    borderWidth: 0,
    data: [1280, 2740, 3220, 4810, 5190, 3780, 3250]
}];

const tradeVolumeDataset = [{
    label: 'trade volume',
    ...colors[2],
    borderWidth: 0,
    data: [1820, 2470, 3220, 4180, 5910, 3870, 3520]
}];

const signupData = {
    labels,
    datasets: signupDataset
};

const withdrawalData = {
    labels,
    datasets: withdrawalDataset
};

const tradesData = {
    labels,
    datasets: tradesDataset
};

const signinData = {
    labels,
    datasets: signinDataset
};

const withdrawalVolumeData = {
    labels,
    datasets: withdrawalVolumeDataset
};

const tradeVolumeData = {
    labels,
    datasets: tradeVolumeDataset
};

const gridOptions = {
scales: {
    xAxes: [{
    gridLines: {
        color: 'rgba(0,0,0,0.02)',
        zeroLineColor: 'rgba(0,0,0,0.02)'
    }
    }],
    yAxes: [{
    gridLines: {
        color: 'rgba(0,0,0,0.02)',
        zeroLineColor: 'rgba(0,0,0,0.02)'
    },
    position: 'left',
    ticks: {
        beginAtZero: true,
        suggestedMax: 9
    }
    }]
}
}

const height = 200;

const options = {
responsive: true,
tooltips: {
    mode: 'label'
},
elements: {
    line: {
    fill: false
    }
},
scales: {
    xAxes: [{
    display: true,
    gridLines: {
        display: false
    },
    labels,
    }],
    yAxes: [{
    type: 'linear',
    display: true,
    position: 'left',
    id: 'y-axis-1',
    gridLines: {
        display: false
    },
    labels: {
        show: true
    }
    },
    {
    type: 'linear',
    display: true,
    position: 'right',
    id: 'y-axis-2',
    gridLines: {
        display: false
    },
    labels: {
        show: true
    }
    }
    ]
}
};

const sharedOptions = {
maintainAspectRatio: true,
responsive: true,
legend: {
    display: false
}
};

const stackedGridOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        stacked: true,
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        stacked: true,
        position: 'left',
        ticks: {
          beginAtZero: true,
          suggestedMax: 9
        }
      }]
    }
  }

  export {
    signupData,
    withdrawalData,
    tradesData,
    signinData,
    withdrawalVolumeData,
    tradeVolumeData,
    sharedOptions,
    gridOptions,
    stackedGridOptions,
    options,
    height
  }
