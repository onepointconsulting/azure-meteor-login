import {Accounts} from "meteor/accounts-base";

export const registerLoginHandler = () => {
    Accounts.registerLoginHandler("jwt_login", function (options) {
        if (options.principalName) {
            const existingUser = Accounts.findUserByUsername(options.principalName);
            if(!existingUser) {
                console.log('Creating new user');
                Accounts.createUser({
                    username: options.principalName,
                    token: options.token,
                    profile: {
                        account_manager: "planner"
                    }
                });
                var user_id = Accounts.findUserByUsername(options.principalName);
                // Return login result for this user
                return {
                    userId: user_id._id.toString()
                };
            }
            else {
                // Return login result for this user
                console.log('Logging in existing user');
                return {
                    userId: existingUser._id.toString()
                };
            }
        }

        // Else no user. Throw error so client knows to init user creation
        return {
            error: new Meteor.Error(404, 'user-not-found')
        };
    });
}