import React, {Component} from 'react';
import {connect} from 'react-redux';
import PowergridOverview from './powergrid-overview/powergrid-overview.jsx';
import PowergridEquipment from './powergrid-equipment/powergrid-equipment.jsx';
import MaintenanceOperation from './maintenance-operation/maintenance-operation.jsx';
import Meteorological from './meteorological/meteorological.jsx';
import ChartMap from './chart-map/chart-map.jsx';
import {CHANGE_DS, changeDs} from '../actions.js';

const Loading = () => (
    <div style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    }}/>
);

class MainApp extends Component {
    componentWillMount () {
        this.props.dispatch(changeDs(this.props.ds));
    }
    render () {
        return <div>
            { this.props.loading && <Loading /> }
            <PowergridOverview />
            <PowergridEquipment />
            <MaintenanceOperation ds={this.props.ds} equipmentState={this.props.equipmentState} equipmentListData={this.props.equipmentListData} />
            <Meteorological ds={this.props.ds} meteorological={this.props.meteorological} />
            <ChartMap changeDs={ (dsbm) => this.props.dispatch(changeDs(dsbm)) } ds={this.props.ds}/>
        </div>;
    }
}

const mapStateToProps = ({ds, meteorological, equipmentListData, equipmentState, loading}) => {
    return {ds, meteorological, equipmentListData, equipmentState, loading};
};

export default connect(mapStateToProps)(MainApp);