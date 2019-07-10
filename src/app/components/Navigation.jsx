import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';

const Navigation=()=>(
    <div>
        <Link to="/">
            <h1 className="text-light ml-3 mb-3">
                Usuarios
            </h1>
        </Link>
    </div>
);

export const ConnectedNavigation=connect(state=>state)(Navigation);