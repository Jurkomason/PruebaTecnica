import {
    take,
    put,
    select
} from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';

const url="http://localhost:8888";


export function* userCreationSaga(){
    while (true){
        yield take(mutations.REQUEST_USER_CREATION);
        const userId=uuid();
        yield put(mutations.createUser(userId));
        const {res} = yield axios.get(url + "/");
        
    }
    
}

export function* getUserSaga(){
    while (true){
        yield take(mutations.GET_USERS);
        try{
            const{data}=yield axios.post(url + '/');
            if(!data){
                throw new Error();
            }
            console.info("Got response", data);
        } catch(e){
            console.log("No se pueden cargar los usuarios");
        }
        
        
    }
    
}