export const REQUEST_USER_CREATION='REQUEST_USER_CREATION';
export const CREATE_USER='CREATE_USER';

export const requestUserCreation=()=>({
    type:REQUEST_USER_CREATION,
});

export const createUser=(userId)=>({
    type:CREATE_USER,
    userId,
});