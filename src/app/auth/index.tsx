import { createContext, useState } from 'react';
import React from 'react';

type contextType = {
    value: any;
    setValue: any;
};

export const AuthContext = createContext<contextType>({
    value: {},
    setValue: null,
});

type props = {
    children: any;
};

export const AuthProvider: React.FC<props> = ({ children }) => {
    const [value, setValue] = useState({ user: null });
    return (
        <AuthContext.Provider value={{ value, setValue }}>
            {children}
        </AuthContext.Provider>
    );
};
