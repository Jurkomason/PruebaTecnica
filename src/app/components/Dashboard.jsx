import React from 'react';
import {connect} from 'react-redux';
import {requestUserCreation} from '../store/mutations';
import {Link} from 'react-router-dom';
import * as mutations from '../store/mutations';

export const Dashboard =({users,getUser})=>(
    <div>
        {users.map(user=>(
        <div >
            <Link to={`/user/${user.id}`} >
                <h2 key={user.id}>{user.first_name} {user.last_name}</h2>
            </Link>
            <img src={user.avatar} alt=""/> 
            <div>
                <h3>{user.email}</h3>
            </div>
        </div>   ))}
        <button onClick={()=>getUser()}>Agregar Nuevo</button>
    </div>
);

const mapStateToProps=state=>state;

const mapDispatchToProps = (dispatch)=>({
        getUser(){
            dispatch(mutations.GET_USERS);
        }
})

export const ConnectedDashboard = connect(mapStateToProps,mapDispatchToProps)(Dashboard);