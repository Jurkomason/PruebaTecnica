import React from 'react';
import {connect} from 'react-redux';
import {requestUserCreation} from '../store/mutations';
import {Link} from 'react-router-dom';
import * as mutations from '../store/mutations';

export const Dashboard =({users,getUser})=>(
    <div className="container">
        <button className="btn btn-primary btn-block mt-2 col-3 mb-6" onClick={()=>getUser()}>Retornar usuarios</button>
        {users.map(user=>(
        <div className="card col-6 mt-4 mb-4 bg-secondary">
            <div className="card-body">
                <img className="card-img-top" src={user.avatar} alt=""/> 
                <Link to={`/user/${user.id}`} >
                    <h1 className="text-light" key={user.id}>{user.first_name} {user.last_name}</h1>
                </Link>
                <div className="">
                    <h4 className="text-light">E-mail: {user.email}</h4>
                </div>
            </div>
        </div>   ))}
    </div>
);

const mapStateToProps=state=>state;

const mapDispatchToProps = (dispatch)=>({
        getUser(){
            
            dispatch(mutations.getUser());
        }
})

export const ConnectedDashboard = connect(mapStateToProps,mapDispatchToProps)(Dashboard);