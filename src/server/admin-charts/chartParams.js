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

const labels = ['1st may', '2nd may', '3rd may', '4th may', '5th may', '6th may', '7th may', '8th may', '9th may'];

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
        }]
    }
};

const sharedOptions = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
        display: false
    }
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

const height = 300;


  export {
    colors,
    labels,
    options,
    sharedOptions,
    gridOptions,
    stackedGridOptions,
    height
  }
