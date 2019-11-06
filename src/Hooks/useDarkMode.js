import React, { useState, useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage.js';

export const useDarkMode = (value) => {
    const [dark, setDark] = useLocalStorage("darkMode", value);
    useEffect(()=> {
        console.log(dark)
        const value = window.localStorage.getItem("darkMode");
        console.log(value);
        let a = document.body.classList.toggle('dark-mode')
        console.log('dark mode: ', a)
    }, [dark])
    return [dark, setDark];
}