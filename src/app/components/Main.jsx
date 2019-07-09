import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store'
import {ConnectedDashboard} from './Dashboard'
import {Router, Route} from 'react-router-dom';
import {history} from '../store/history';
import {ConnectedNavigation} from './Navigation'
import {ConnectUserDetail} from './UserDetail'



export const Main=()=>(
    <Router history={history}>
        <Provider store={store}>
            <div>      
                <ConnectedNavigation/>
                <Route 
                    exact 
                    path="/" 
                    render={()=>(<ConnectedDashboard/>)}
                />
                <Route 
                    exact 
                    path="/user/:id" 
                    render={({match})=>(<ConnectUserDetail match={match}/>)}
                />                   
            </div>
        </Provider>
    </Router>
)