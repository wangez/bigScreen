import request from 'superagent';

export const CHANGE_DS = 'changeDs';
export const EQUIPMENT_LIST_DATA_CHANGE = 'equipmentListDataChange';
export const EQUIPMENT_STATE_CHANGE = 'equipmentStateChange';
export const METEOROLOGICAL_CHANGE = 'meteorologicalChange';

const change_ds = (value) => ({
    type: CHANGE_DS,
    value
});

const equipment_list_data = (value) => ({
    type: EQUIPMENT_LIST_DATA_CHANGE,
    value
});

const equipment_state_change = (value) => ({
    type: EQUIPMENT_STATE_CHANGE,
    value
});

const meteorological_chage = (value) => ({
    type: METEOROLOGICAL_CHANGE,
    value
});

export const changeDs = (dsbm) => (m_dispatch, m_getState) => {
    m_dispatch(change_ds(dsbm));
    request
        .post('sockjs-node/info')
        .send('t', '1497588743721')
        .end(function(err, res){
            let data = [
                {"SBLXMC":"主变压器","NUM":3265},
                {"SBLXMC":"组合电器","NUM":13044},
                {"SBLXMC":"线路","NUM":4006},
                {"SBLXMC":"电缆","NUM":1752},
                {"SBLXMC":"电流互感器","NUM":14524},
                {"SBLXMC":"电压互感器","NUM":7061},
                {"SBLXMC":"断路器","NUM":4512},
                {"SBLXMC":"避雷器","NUM":15663},
                {"SBLXMC":"隔离开关","NUM":27515}
            ];
            let equipmentListData = new Map();
            data.forEach(({SBLXMC, NUM}) => equipmentListData.set(SBLXMC, NUM) );
            m_dispatch( equipment_list_data(equipmentListData) );
        });
    request
        .get('sockjs-node/info')
        .end(function(err, res){
            let data = [
                {"SBMC":"注意","NUM":813},
                {"SBMC":"严重","NUM":86},
                {"SBMC":"异常","NUM":794},
                {"SBMC":"正常","NUM":100207}
            ];
            let equipmentState = new Map();
            data.forEach(({SBMC, NUM}) => equipmentState.set(SBMC, NUM) );
            m_dispatch( equipment_state_change(equipmentState) );
        });
    request
        .get('sockjs-node/info')
        .end(function(err, res){
            let data = {
                "humidity":"40",
                "wspeed":"3.1",
                "issuedate":null,
                "yjtitle":null,
                "temperature":"30"
            };
            m_dispatch( meteorological_chage(data) );
        });
};