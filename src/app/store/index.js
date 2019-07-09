import {createStore, applyMiddleware,combineReducers} from 'redux';
import { defaultState } from '../../server/defaultState'
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware=createSagaMiddleware();
import * as sagas from './sagas.mock';
import * as mutations from './mutations';

export const store = createStore(
    combineReducers({
        users(users=defaultState.users,action){
            switch(action.type){
                case mutations.CREATE_USER:
                    return[...users, {
                        id:action.userId,
                        email: "nuevousuario@mail.com",
                        first_name: "Nuevo",
                        last_name: "Usuario",
                        avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
                    }]
            }
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for(let saga in sagas){
    sagaMiddleware.run(sagas[saga]);
}