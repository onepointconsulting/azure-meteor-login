import React from 'react';

export const Logout = () => {

    const logout = () => location.href = '/.auth/logout';

    return (
        <div className="logout">
            <button onClick={logout} title="Time to say good-bye">Log out</button>
        </div>
    );
};
