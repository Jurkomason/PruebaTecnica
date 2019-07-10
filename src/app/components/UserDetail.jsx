import React from 'react';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { userCreationSaga } from '../store/sagas';

const UserDetail = ({
    id,
    user,
})=>(
    <div className="card col-lg-4 ">
        
        <img className="card-img-top" src={user.avatar} alt=""/>
        <div className="card-body">
            <h2>
            {user.first_name} {user.last_name}
            </h2>
            <h4>E-mail: {user.email}</h4>
        </div>

    </div>
);

const mapStateToProps = (state,ownProps)=>{
    let id=ownProps.match.params.id;
    
    let user =state.users.find(user=>Number.toString(user.id)===Number.toString(id));
             
    return{
        id,
        user,
    }
};

export const ConnectUserDetail=connect(mapStateToProps)(UserDetail);