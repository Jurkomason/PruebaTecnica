import {
    take,
    put,
    select
} from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';

const url="http://localhost:8888";

export function* getUserSaga(){
    console.info("Got response");
    while (true){
        yield take(mutations.GET_USERS);
        
        try{
            const{data}=yield axios.get(url + '/');
            if(!data){
                throw new Error();
            }
            yield put(mutations.setState(data))
            
        } catch(e){
            console.log("No se pueden cargar los usuarios");
        }
        
        
    }
    
}