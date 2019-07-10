import React from 'react';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { userCreationSaga } from '../store/sagas';

const UserDetail = ({
    id,
    user,
})=>(
    <div className="card col-lg-4 mt-4 mb-4 bg-secondary ">
        
        <img className="card-img-top" src={user.avatar} alt=""/>
        <div className="card-body">
            <h2 className="text-light">
            {user.first_name} {user.last_name}
            </h2>
            <h4 className="text-light">E-mail: {user.email}</h4>
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