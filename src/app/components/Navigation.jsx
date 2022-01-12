/**
 * The navigation component is present on all non-login pages,
 * and contains a link back to the dashboard, and the user's name.
 */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import { ConnectedUsernameDisplay } from './UsernameDisplay'
import * as mutations from '../store/mutations';


const Navigation = ({id, authenticated})=>(
    <div className="header">
        <Link to="/dashboard">
            <h2>
                name of guild master update
            </h2>
        </Link>

        { authenticated ?
            <h4>
                Hello, <ConnectedUsernameDisplay id={id}/>!
            </h4>
            : null
        }
    </div>
);


const mapStateToProps = ({session})=>({
    id:session.id,
    authenticated:session.authenticated == mutations.AUTHENTICATED
});

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);

