import { combineReducers } from 'redux';
import {CHANGE_DS, EQUIPMENT_LIST_DATA_CHANGE, EQUIPMENT_STATE_CHANGE, METEOROLOGICAL_CHANGE} from './actions.js';

const ds = (state = 'JNGDJ', action) => {
    if (action.type === CHANGE_DS) {
        return action.value;
    } else {
        return state;
    }
};

const equipmentListData = (state = new Map(), action) => {
    if (action.type === EQUIPMENT_LIST_DATA_CHANGE) {
        return action.value;
    } else {
        return state;
    }
};

const equipmentState = (state = new Map(), action) => {
    if (action.type === EQUIPMENT_STATE_CHANGE) {
        return action.value;
    } else {
        return state;
    }
};

const meteorological = (state = {}, action) => {
    if (action.type === METEOROLOGICAL_CHANGE) {
        return action.value;
    } else {
        return state;
    }
};

const loading = (state = false, action) => {
    let type = action.type;
    if (type === 'loading') {
        return action.value;
    } else {
        return state;
    }
};

const reducers = combineReducers({
    ds,
    equipmentListData,
    equipmentState,
    loading,
    meteorological
});

export default reducers;