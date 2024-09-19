/* 

const initialState = {
    user: '',
    pass: ''
};

const persistedState = localStorage.getItem('logUser')
    ? JSON.parse(localStorage.getItem('logUser'))
    : initialState;

const logUserReducer = (state = persistedState, action) => {
    switch (action.type) {
        case 'SET_USER':
            const newState = {
                ...state,
                user: action.payload.user,
                pass: action.payload.pass
            };
            localStorage.setItem('logUser', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};

export default logUserReducer; */

const initialState = {
    index: null,
    typeUser:null
};

const persistedState = localStorage.getItem('indexState')
    ? JSON.parse(localStorage.getItem('indexState'))
    : initialState;

const indexReducer = (state = persistedState, action) => {
    switch (action.type) {
        case 'SET_INDEX':
            const newState = {
                ...state,
                index: action.payload.index,
                typeUser: action.payload.typeUser
            };
            localStorage.setItem('indexState', JSON.stringify(newState));
            return newState;
        case 'RESET_INDEX':
            const newStateReset = {
                ...state,
                index: null,
                typeUser: null
            };
            localStorage.setItem('indexState', JSON.stringify(newStateReset));
            return newStateReset
        default:
            return state;
    }
};

export default indexReducer;