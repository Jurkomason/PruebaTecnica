import React from 'react';
import{connect} from 'react-redux';

const UserDetail = ({
    id,
    email,
    first_name,
    last_name,
    avatar,
})=>(
    <div>
        Detalles del Usuario
    </div>
);

const mapStateToProps = state=>state;

export const ConnectUserDetail=connect(mapStateToProps)(UserDetail);