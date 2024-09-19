import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    photo: '',
    name: "",
    mail: "",
    dni: "",
    phone: "",
    city: "",
    typeUser: "",
    typeService: [],
    pets: [],
    pass: "",
};

const regUserSlice = createSlice({
    name: 'regUser',
    initialState,
    reducers: {
        setUser(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        setTypeService(state, action) {
            state.typeService = action.payload.typeService; // Sustituye el array
        },
        addTypeService(state, action) {
            state.typeService.push(action.payload); // Agrega un nuevo tipo de servicio
        },
        setPets(state, action) {
            state.pets = action.payload.pets; // Sustituye el array
        },
        addPet(state, action) {
            state.pets.push(action.payload); // Agrega una nueva mascota
        },
    },
});

// Exporta las acciones
export const {
    setUser,
    setTypeService,
    addTypeService,
    setPets,
    addPet,
} = regUserSlice.actions;

// Exporta el reducer
export default regUserSlice.reducer;


/* import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    photo: '',
    name: "",
    mail: "",
    dni: "",
    phone: "",
    city: "",
    typeUser: "",
    typeService: [],
    pets: [],
    pass: "",
};

const regUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                photo: action.payload.photo,
                name: action.payload.name,
                mail: action.payload.mail,
                dni: action.payload.dni,
                phone: action.payload.phone,
                city: action.payload.city,
                typeUser: action.payload.typeUser,
                pass: action.payload.pass,
            };
        case 'SET_TYPE_SERVICE':
            return {
                ...state,
                typeService: action.payload.typeService
            };
        case 'SET_PETS':
            return {
                ...state,
                pets: action.payload.pets
            };
        default:
            return state;
    }
}

export default regUserReducer; */
