import React, {useEffect, useState} from 'react';
import {Meteor} from "meteor/meteor";
const jwt = require('jsonwebtoken');
import JSONPretty from 'react-json-pretty';

const fakePrincipal = "fakePrincipal";
const fakeToken = "fakeToken";

const fetchCredentials = (setPrincipalName, setIdToken, setUserAgent) => {
    return new Promise((resolve) => {
        fetch("/jsonHeaders")
            .then(r => r.json())
            .then(j => {
                const token = j['x-ms-token-aad-id-token'] || fakeToken;
                const principalName = j['x-ms-client-principal-name'] || fakePrincipal;
                setIdToken(token);
                setPrincipalName(principalName);
                setUserAgent(j['user-agent']);
                resolve({principalName, token});
            })
    });

}

const loginUser = (principalName, idToken, setUserId) => {
    Accounts.callLoginMethod({
        methodArguments: [
            {
                token: idToken,
                principalName: principalName
            }
        ],
        validateResult: function (result) {
            console.log('Login results', result);
        },
        userCallback: function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('Success');
                console.log('Meteor.userId()', Meteor.userId());
                setUserId(Meteor.userId());
            }
        }
    })
}

const extractJwtToken = (idToken) => {
    if(idToken && idToken.length > 100) {
        return (
            <div className="paramContainer">
                <div className="displayParamKey">JWT Token content</div>
                <div className="displayParamValue">
                    <JSONPretty id="json-pretty-id-token" data={jwt.decode(idToken)} />
                </div>
            </div>
        )
    }
    return <></>;
}

export const UserData = () => {
    const [principalName, setPrincipalName] = useState(fakePrincipal);
    const [idToken, setIdToken] = useState("");
    const [userAgent, setUserAgent] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        fetchCredentials(setPrincipalName, setIdToken, setUserAgent)
            .then(({principalName, token}) => loginUser(principalName, token, setUserId));
    }, []);

    return (
        <>
            <div>
                <a href="/jsonHeaders" target="_blank">View JSON Headers</a>
            </div>
            <div className="paramContainer">
                <div className="displayParamKey">Principal Name:</div>
                <div className="displayParamValue">{principalName}</div>
            </div>
            <div className="paramContainer">
                <div className="displayParamKey">User Agent:</div>
                <div className="displayParamValue">{userAgent}</div>
            </div>
            {extractJwtToken(idToken)}
            <div className="displayParamValue">
                <button onClick={() => loginUser(principalName, idToken, setUserId)}>Validate Login</button>
                <p>
                    {userId ? `You are logged in as user ${userId}` : ''}
                </p>
            </div>
        </>
    )
}