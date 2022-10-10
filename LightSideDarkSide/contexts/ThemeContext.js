import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({});


const themes = {
    day: {
        body: '#401c96',
        background: '#d0f0f8',
        primary: '#937dff',
        toggleText: 'ʕ•́ᴥ•̀ʔっ Its Day Time! 🌞'
    },
    night: {
        body: '#ffffff',
        background: '#284087',
        primary: '#ffe87d',
        toggleText: 'ʕ•́ᴥ•̀ʔっ Its Night Time! 🌚'
    }
}

export const ThemeProvider = ( {children} ) => {

    const themeProv = useThemeProv();
    return(
        <ThemeContext.Provider value={themeProv}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}

const useThemeProv = () => {
    const [theme, setTheme] = useState(themes.day)

    const toggleTheme = (thm) => {
        if (thm === themes.day)
        {
            setTheme(themes.night);
            //return themes.dark;
        } else {
            setTheme(themes.day);
            //return themes.light;
        }
    }

    useEffect( () => {
        const ini = () => {
            setTheme(themes.day);
        }
            return () => ini();
    }, [])

    return {
        theme,
        toggleTheme
    }
}