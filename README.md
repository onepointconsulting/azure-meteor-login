# Azure Meteor Login

## Goal

The goal of this project is to create a simple [Meteor](https://www.meteor.com/) project,
that uses the Azure Active Directory login. These features can only be used 
in case this application is deployed as an [Azure App Service](https://azure.microsoft.com/en-gb/services/app-service/).

## High Level Overview

This application is a simple [Meteor](https://www.meteor.com/) that is packed as a container and deployed as 
an [Azure App Service](https://azure.microsoft.com/en-gb/services/app-service/). This Azure App Service is 
configured to use the Azure AD (Active Directory) login.

After deployment of this application, the end user is able to login, if he / she has an account in a specific directory4
of Azure AD. This application will then extract the user details from the (JWT token)[https://jwt.io/] 
provided by the Azure authentication provider and perform the login with these details against the authentication
infrastructure provided by [Meteor](https://www.meteor.com/). 

After logging in to Azure this application will use the Azure service authentication data to login 
the user to [Meteor](https://www.meteor.com/). This means that a user is created in the [MongoDB](https://www.mongodb.com/)
collections used by [Meteor](https://www.meteor.com/) and a user injected in the in-memory Meteor object available 
on both client and server side. 

