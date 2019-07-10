export const REQUEST_USER_CREATION='REQUEST_USER_CREATION';
export const CREATE_USER='CREATE_USER';
export const GET_USERS='GET_USERS';
export const SET_STATE='SET_STATE'

export const requestUserCreation=()=>({
    type:REQUEST_USER_CREATION,
});

export const createUser=(userId)=>({
    type:CREATE_USER,
    userId,
});

export const getUser=()=>(
    {
    type:GET_USERS,
});

export const setState=(state={}) => ({
    type:SET_STATE,
    state
});