'use client'

import { ReactNode, useState, useEffect, useMemo } from 'react'
import { ThemeProvider } from 'next-themes'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, theme } from 'antd'
import { useTheme } from 'next-themes'
interface Props {
    defaultTheme: string
    children: ReactNode
}
export default function Providers({ defaultTheme, children }: Props) {
    return (
        <AntdRegistry>
            <ThemeProvider>
                <AntDesignProvider defaultTheme={defaultTheme}>
                    {children}
                </AntDesignProvider>
            </ThemeProvider>
        </AntdRegistry>
    )
}

function AntDesignProvider({ defaultTheme, children }: Props) {
    const { defaultAlgorithm, darkAlgorithm } = theme
    const { theme: currentTheme = defaultTheme, setTheme } = useTheme()

    return (
        <ConfigProvider
            theme={{
                algorithm:
                    currentTheme === 'light' ? defaultAlgorithm : darkAlgorithm
            }}
        >
            {children}
        </ConfigProvider>
    )
}
