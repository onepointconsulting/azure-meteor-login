import React from 'react';
import {Info} from './Info.jsx';
import {UserData} from "./UserData";
import {Logout} from "./Logout";

export const App = () => (
    <div>
        <h1>Welcome to the Azure Login Meteor Experiment!</h1>
        <h3>v. 44</h3>
        <Info/>
        <UserData />
        <Logout />
    </div>
);
