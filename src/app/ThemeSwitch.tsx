'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { setCookie } from 'cookies-next'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const handleSetTheme = (theme: string) => {
        setTheme(theme)
        setCookie('theme', theme)
    }

    return (
        <select value={theme} onChange={(e) => handleSetTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    )
}
export default ThemeSwitch
