import React from 'react';
import {connect} from 'react-redux'

export const Dashboard =({users})=>(
    <div>
        <h2>Dashboard</h2>
        {users.map(user=>(
        <div>
            <h3>{user.first_name} {user.last_name}</h3>
            <img src={user.avatar} alt=""/> 
            <div>
                {user.email}
            </div>
            
        </div>   ))}
    </div>
);

function mapStateToProps (state){

    return{
        users:state.users

    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);