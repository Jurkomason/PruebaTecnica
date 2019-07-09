import React from 'react';
import {connect} from 'react-redux';
import {requestUserCreation} from '../store/mutations';

export const Dashboard =({users,createNewUser})=>(
    <div>
        {users.map(user=>(
        <div key={user.id}>
            <h2>{user.first_name} {user.last_name}</h2>
            <img src={user.avatar} alt=""/> 
            <div>
                <h3>{user.email}</h3>
            </div>
        </div>   ))}
        <button onClick={()=>createNewUser()}>Agregar Nuevo</button>
    </div>
);

function mapStateToProps (state){

    return{
        users:state.users

    }
};

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        createNewUser(){
            console.log("creando....");
            dispatch(requestUserCreation());
        }
    }
}

export const ConnectedDashboard = connect(mapStateToProps,mapDispatchToProps)(Dashboard);