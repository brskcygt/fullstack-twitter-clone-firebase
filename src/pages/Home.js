import React from 'react'
import { Content } from '../layout/Content'
import { Sidebar } from '../layout/Sidebar'
import { Widgets } from '../layout/Widgets'

export const Home = () => {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      <Sidebar/>
      <Content/>
      <Widgets/>
    </div>
  )
}
