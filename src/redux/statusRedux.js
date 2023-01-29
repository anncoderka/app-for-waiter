import tablesReducer from "./tablesRedux";

//selectors
export const getAllOptions = (state) => { return state.status };
export const getTablesId = (state) => { return state.tables.map(table => { return  table.id }) };

//actions
const createActionName = actionName => `app/status/${actionName}`;
const UPDATE_STATUS = createActionName('UPDATE_STATUS');

//action creators
const updateStatus = (payload) => {
    return ({ type: UPDATE_STATUS, payload }
        )
    };

export const fetchStatus = () => {
    return (dispatch) =>{
    fetch('http://localhost:3131/api/status')
        .then(res => res.json())
        .then(status => dispatch(updateStatus(status)))
        .catch(rejected => {
            console.log('fetch rejected info: ', rejected)
        })
    }
}

export const statusReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_STATUS:
            return [...action.payload];
        default:
            return statePart;
    }
}
export default statusReducer;