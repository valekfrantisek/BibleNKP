// colour palletes
const colours_blues = ['#CCE8EE', '#66B9CB', '#008BA8', '#005365', '#001C22']
const colours_green = ['#B3E5D4', '#4DC29C', '#00A871', '#00764F', '#003222']
const colours_orange = ['#F7DEBF', '#EBB16B', '#E3902B', '#9F651E', '#442B0D']
const colours_red = ['#F7C2BF', '#EB716B', '#E3342B', '#9F241E', '#44100D']

const extra_colours_pt1 = ['#213A3F', '#496368', '#008970', '#7FD1AE', '#B8CEAA', '#CCE8EE', '#E9DFF7']
const extra_colours_pt2 = ['#B2A8BF', '#834F62', '#FBB3CD', '#FCDDCB', '#BF5A00', '#832800', '#AD8973']
const extra_colours_pt3 = ['#FABC2A', '#FFCAB1', '#F38D68', '#EE6C4D', '#F76F8E', '#F2BAC9', '#7FD8BE', '#A1FCDF', '#3B5249', '#519872']

const rgb_colours_blues = [(204, 232, 238), (102, 185, 203), (0, 139, 168), (0, 83, 101), (0, 28, 34)]
const rgb_colours_green = [(179, 229, 212), (77, 194, 156), (0, 168, 113), (0, 118, 79), (0, 50, 34)]
const rgb_colours_orange = [(247, 222, 191), (235, 177, 107), (227, 144, 43), (159, 101, 30), (68, 43, 13)]
const rgb_colours_red = [(247, 194, 191), (235, 113, 107), (227, 52, 43), (159, 36, 30), (68, 16, 13)]

const rgb_extra_colour_pt1 = [(33, 58, 63), (73, 99, 104), (0, 137, 112), (127, 209, 174), (184, 206, 170), (204, 232, 238), (233, 223, 247)]
const rgb_extra_colour_pt2 = [(178, 168, 191), (131, 79, 98), (251, 179, 205), (252, 221, 203), (191, 90, 0), (131, 40, 0), (173, 137, 115)]
const rgb_extra_colour_pt3 = [(250, 188, 42), (255, 202, 177), (243, 141, 104), (238, 108, 77), (247, 111, 142), (242, 186, 201), (127, 216, 190), (161, 252, 223), (59, 82, 73), (81, 152, 114)]

// chart setup
const labels = [1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929]

const borderWidth = 2;
const tension = 0.2;

const dataForPlottingTop = [{
        verseId: 'Jk 2:8',
        citations: [1, 2, 3, 4, null, 6, 7, 8, 9, 10, 11],
        backgroundColor: 'rgba(0, 139, 168, 0.6)',
        borderColor: 'rgba(0, 139, 168, 0.9)',
        hoverBackgroundColor: 'rgba(0, 139, 168, 1)',
    }, {
        verseId: 'Jk 1:11',
        citations: [8, 4, 7, 4, 8, null, 11, 6, 3, 10, 7],
        backgroundColor: 'rgba(0, 168, 113, 0.6)',
        borderColor: 'rgba(0, 168, 113, 0.9)',
        hoverBackgroundColor: 'rgba(0, 168, 113, 1)',
    }, {
        verseId: 'Jk 5:9',
        citations: [null, null, null, 10, 5, 7, 10, 7, 3, 11, 9],
        backgroundColor: 'rgba(227, 144, 43, 0.6)',
        borderColor: 'rgba(227, 144, 43, 0.9)',
        hoverBackgroundColor: 'rgba(227, 144, 43, 1)',
}];

const dataForPlottingTopEvangelia = [{
    verseId: 'J 3:12',
    citations: [3, 4, 3, 4, 9, 6, 4, 18, 19, 10, 17],
    backgroundColor: 'rgba(227, 52, 43, 0.6)',
    borderColor: 'rgba(227, 52, 43, 0.9)',
    hoverBackgroundColor: 'rgba(227, 52, 43, 1)',
}, {
    verseId: 'Mk 3:11',
    citations: [8, 2, 15, 4, 18, 4, 7, 6, 3, 11, 7],
    backgroundColor: 'rgba(250, 188, 42, 0.6)',
    borderColor: 'rgba(250, 188, 42, 0.9)',
    hoverBackgroundColor: 'rgba(250, 188, 42, 1)',
}, {
    verseId: 'Mt 2:15',
    citations: [null, 12, 8, 10, 5, 8, 10, 4, 3, 12, 9],
    backgroundColor: 'rgba(255, 202, 177, 0.6)',
    borderColor: 'rgba(255, 202, 177, 0.9)',
    hoverBackgroundColor: 'rgba(255, 202, 177, 1)',
}];

const dataForPlottingTopNZ = [{
    verseId: 'Jk 2:8',
    citations: [1, 2, 3, 4, null, 6, 7, 8, 9, 10, 11],
    backgroundColor: 'rgba(243, 141, 104, 0.6)',
    borderColor: 'rgba(243, 141, 104, 0.9)',
    hoverBackgroundColor: 'rgba(243, 141, 104, 1)',
}, {
    verseId: 'J 3:12',
    citations: [3, 4, 3, 4, 9, 6, 4, 18, 19, 10, 17],
    backgroundColor: 'rgba(238, 108, 77, 0.6)',
    borderColor: 'rgba(238, 108, 77, 0.9)',
    hoverBackgroundColor: 'rgba(238, 108, 77, 1)',
}, {
    verseId: 'Sk 7:12',
    citations: [4, 3, 11, 14, 17, 14, 8, 4, 2, 11, 10],
    backgroundColor: 'rgba(247, 111, 142, 0.6)',
    borderColor: 'rgba(247, 111, 142, 0.9)',
    hoverBackgroundColor: 'rgba(247, 111, 142, 1)',
}, {
    verseId: 'Zj 1:1',
    citations: [1, 13, 11, 8, 3, 8, 2, 15, 4, 12, 3],
    backgroundColor: 'rgba(242, 186, 201, 0.6)',
    borderColor: 'rgba(242, 186, 201, 0.9)',
    hoverBackgroundColor: 'rgba(242, 186, 201, 1)',
}];

const dataForPlottingTopSZ = [{
    verseId: 'Gen 1:4',
    citations: [4, 3, 11, 14, 17, 14, 8, 4, 2, 11, 10],
    backgroundColor: 'rgba(127, 216, 190, 0.6)',
    borderColor: 'rgba(127, 216, 190, 0.9)',
    hoverBackgroundColor: 'rgba(127, 216, 190, 1)',
}, {
    verseId: 'Iz 1:14',
    citations: [1, 13, 11, 8, 3, 8, 2, 15, 4, 12, 3],
    backgroundColor: 'rgba(161, 252, 223, 0.6)',
    borderColor: 'rgba(161, 252, 223, 0.9)',
    hoverBackgroundColor: 'rgba(161, 252, 223, 1)',
}, {
    verseId: 'Ab 2:3',
    citations: [3, 4, 3, 4, 9, 6, 4, 18, 19, 10, 17],
    backgroundColor: 'rgba(59, 82, 73, 0.6)',
    borderColor: 'rgba(59, 82, 73, 0.9)',
    hoverBackgroundColor: 'rgba(59, 82, 73, 1)',
}];

function makeDatasets(value, index, array) {
    let datasetInstance = {
        label: array[index]['verseId'],
        backgroundColor: array[index]['backgroundColor'],
        borderColor: array[index]['borderColor'],
        hoverBackgroundColor: array[index]['hoverBackgroundColor'],
        borderWidth: borderWidth,
        data: array[index]['citations'],
        tension: tension
    }
    return datasetInstance;
}

let datasets = dataForPlottingTop.map(makeDatasets);

const palette = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(255, 205, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(201, 203, 207, 0.8)'
  ];

let data = {
    labels: labels,
    datasets: datasets
  };

const barOptions = {
    scales: {
        y: {
            beginAtZero: true
        },
        x: {
            min: 0,
            max: 10
        }
    },
    responsive: true,
    skipNull: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
        }
    }
}

const lineOptions = {
    scales: {
        y: {
            beginAtZero: true
        },
        x: {
            min: 0,
            max: 10
        }
    },
    responsive: true,
    skipNull: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
        }
    },
    fill: false,
    interaction: {
        intersect: false
    },
    radius: 0,
}

// Top citations in years chart:
let configTopInYears = {
    type: 'bar',
    data: data,
    options: barOptions,
};

let chartCitationsTopInYears = new Chart(
    document.getElementById('chartCitationsTopInYears'),
    configTopInYears
);

// Change year scale
function changeYearsTopInYears(start, end) {
    chartCitationsTopInYears.options.scales.x.min = start;
    chartCitationsTopInYears.options.scales.x.max = end;
    chartCitationsTopInYears.update();
}

// YearSlider settings
let yearSlider = document.getElementById('slider-round');

noUiSlider.create(yearSlider, {
    start: [1919, 1929],
    connect: true,
    range: {
        'min': 1919,
        'max': 1929
    },
    connect: true,
    format: wNumb({
        decimals: 0
    }),
    step: 1,
    tooltips: true
});

let minYearId = 0;
let maxYearId = 10+1;

yearSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        let maxYear = parseInt(values[handle]);
        maxYearId = maxYear-1919;
    } else {
        let minYear = parseInt(values[handle]);
        minYearId = minYear-1919;
    }
});

// Apply slider change
yearSlider.noUiSlider.on('update', function() {changeYearsTopInYears(minYearId,maxYearId)});

// Change chart type:
let barLineButton = document.getElementById('BarLineButton');

function changeChartType() {
    chartCitationsTopInYears.destroy();
    if (configTopInYears.type == 'bar') {
        configTopInYears.type = 'line';
        configTopInYears.options = lineOptions;
        barLineButton.innerHTML = 'sloupcový graf';
    } else if (configTopInYears.type == 'line') {
        configTopInYears.type = 'bar';
        barLineButton.innerHTML = 'čárový graf';
        configTopInYears.options = barOptions;
    };
    chartCitationsTopInYears = new Chart(
        document.getElementById('chartCitationsTopInYears'),
        configTopInYears);
    changeYearsTopInYears(minYearId,maxYearId);
    chartCitationsTopInYears.update();
}

barLineButton.onclick = function() {changeChartType()};

// Change selected dataset
let selectedDataset = document.getElementById('selectDataset');

function changeDataset() {
    if (selectedDataset.value == 'Top') {
        datasets = dataForPlottingTop.map(makeDatasets);
        chartCitationsTopInYears.data.datasets = datasets
        chartCitationsTopInYears.update();
        console.log(datasets);
    } else if (selectedDataset.value == 'TopEvangelia') {
        datasets = dataForPlottingTopEvangelia.map(makeDatasets);
        chartCitationsTopInYears.data.datasets = datasets
        chartCitationsTopInYears.update();
        console.log(configTopInYears.datasets);
    } else if (selectedDataset.value == 'TopNZ') {
        datasets = dataForPlottingTopNZ.map(makeDatasets);
        chartCitationsTopInYears.data.datasets = datasets
        chartCitationsTopInYears.update();
        console.log(configTopInYears.datasets);
    } else if (selectedDataset.value == 'TopSZ') {
        datasets = dataForPlottingTopSZ.map(makeDatasets);
        chartCitationsTopInYears.data.datasets = datasets
        chartCitationsTopInYears.update();
        console.log(configTopInYears.datasets);
    };
}

selectedDataset.onchange = function() {changeDataset()};