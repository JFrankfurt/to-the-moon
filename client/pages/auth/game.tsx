import dynamic from 'next/dynamic'
import React from 'react'

const MoonBase = dynamic(import('../../game/index') as any, {ssr: false})

export default () => <MoonBase />
