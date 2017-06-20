import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './chart-map.less';
import echarts from 'echarts';
import sd from './sd.js';
import icon from './icon.png';
import dsDisc from '../../../common/ds-disc.js';

const dataArr = [
    { 
        name: '枣庄市', id: 'ZZGDJ', coord: ['117.557964', '34.856424'],
        label: { normal: { offset: [-10, -20] } }
    },
    { 
        name: '济南市', id: 'JNGDJ', coord: ['117.000923', '36.675807'],
        label: { normal: { offset: [0, 10] } }
    },
    { 
        name: '东营市', id: 'DYGDJ', coord: ['118.66471', '37.434564'],
        label: { normal: { offset: [0, -20] } }
    },
    { 
        name: '淄博市', id: 'ZBGDJ', coord: ['118.047648', '36.814939'],
        label: { normal: { offset: [-8, 15] } }
    },
    { 
        name: '青岛市', id: 'QDGDJ', coord: ['120.355173', '36.082982'],
        label: { normal: { offset: [-5, -30] } }
    },
    { 
        name: '烟台市', id: 'YTGDJ', coord: ['121.391382', '37.539297'],
        label: { normal: { offset: [-40, 20] } }
    },
    { 
        name: '泰安市', id: 'TAGDJ', coord: ['117.129063', '36.194968'],
        label: { normal: { offset: [0, 15] } }
    },
    { 
        name: '济宁市', id: 'JINGDJ', coord: ['116.587245', '35.415393'],
        label: { normal: { offset: [0, -20] } }
    },
    { 
        name: '威海市', id: 'WHGDJ', coord: ['122.116394', '37.509691'],
        label: { normal: { offset: [0, 30] } }
    },
    { 
        name: '莱芜市', id: 'LWGDJ', coord: ['117.677736', '36.214397'],
        label: { normal: { offset: [-5, -20] } }
    },
    { 
        name: '日照市', id: 'RZGDJ', coord: ['119.461208', '35.428588'],
        label: { normal: { offset: [-20, -20] } }
    },
    { 
        name: '临沂市', id: 'LYGDJ', coord: ['118.326443', '35.065282'],
        label: { normal: { offset: [-15, -20] } }
    },
    { 
        name: '菏泽市', id: 'HZGDJ', coord: ['115.469381', '35.246531'],
        label: { normal: { offset: [10, 20] } }
    },
    { 
        name: '德州市', id: 'DZGDJ', coord: ['116.307428', '37.453968'],
        label: { normal: { offset: [10, 20] } }
    },
    { 
        name: '聊城市', id: 'LCGDJ', coord: ['115.980367', '36.456013'],
        label: { normal: { offset: [0, 10] } }
    },
    { 
        name: '滨州市', id: 'BZGDJ', coord: ['118.016974', '37.383542'],
        label: { normal: { offset: [-20, -20] } }
    },
    { 
        name: '潍坊市', id: 'WFGDJ', coord: ['119.107078', '36.70925'],
        label: { normal: { offset: [0, 20] } }
    }
];

const option = {
    geo: [{
        type: 'map',
        map: 'sd',
        zoom: 1.2,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderColor: "#0099f7",
                borderType: "solid",
                borderWidth: "2",
                areaColor: "rgba(0, 14, 38, 0.3)"
            },
            emphasis: {
                borderType: "dotted"
            }
        }
    }],
    series: [
        {
            type: "scatter",
            coordinateSystem: "geo",
            markPoint: {
                symbol: `image://${icon}`,
                symbolSize: 30,
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}',
                        textStyle: {
                            color: "#99ddfd"
                        }
                    }
                },
                data: dataArr
            }
        }
    ]
};

class ChartMap extends Component {
    componentDidMount () {
        this.chart = echarts.init(this.dom);
        this.setChartOption();
        this.chart.on('click', (param) => this.chartClick(param));
    }
    setChartOption () {
        option.geo[0].regions = [{
            selected: true,
            name: dsDisc[this.props.ds]
        }];
        this.chart.setOption(option);
    }
    chartClick (param) {
        this.props.changeDs(dsDisc[param.name]);
    }
    render () {
        if (this.chart) {
            this.setChartOption();
        }
        return <div className={style.container} ref={ dom => this.dom = dom } />;
    }
}

export default ChartMap;
// const mapStateToProps = ({ds}) => {
//     return {ds};
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeDs: (val) => dispatch({type: 'ds_change', value: val})
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ChartMap);