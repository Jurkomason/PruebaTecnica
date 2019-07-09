import {
    take,
    put,
    select
} from 'redux-saga/effects'

import * as mutations from './mutations';
import uuid from 'uuid';

export function* userCreationSaga(){
    while (true){
        yield take(mutations.REQUEST_USER_CREATION);
        const userId=uuid();
        yield put(mutations.createUser(userId));
        
    }
}