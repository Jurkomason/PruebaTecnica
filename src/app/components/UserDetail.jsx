import React from 'react';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { userCreationSaga } from '../store/sagas.mock';

const UserDetail = ({
    id,
    user,
})=>(
    <div>
        <h2>
           {user.first_name} {user.last_name}
        </h2>
        <h4>{user.email}</h4>
        <img src={user.avatar} alt=""/>

    </div>
);

const mapStateToProps = (state,ownProps)=>{
    let id=ownProps.match.params.id;
    let user =state.users.find(user=>user.id===id);
             
    return{
        id,
        user,
    }
};

export const ConnectUserDetail=connect(mapStateToProps)(UserDetail);