import React from 'react';

export const FeaturesContext = React.createContext();

export default function FeaturesProvider({ children }) {

    return (
        <FeaturesContext.Provider value={{

        }}>
            {children}
        </FeaturesContext.Provider>
    );
}