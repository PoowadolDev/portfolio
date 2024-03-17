'use client'

import {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
    const {theme , setTheme} = useTheme();

    console.log("1")
    setTheme("light")
    // useEffect(() => setMounted(true), [])
    // if (resolvedTheme === 'dark') {
    //     return setTheme('light')
    // }

    // if (resolvedTheme === 'light') {
    //     return setTheme('dark')
    // }

}