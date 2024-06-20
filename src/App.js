import React from 'react'
import { RouteManager } from './constant/module/route_manager'
import { NavigationBar } from './views/partial/navigation_bar/navigation_bar'

function App() {
  return (
    <>
    <NavigationBar/>
    {RouteManager.routeUrl()}
    </>
  )
}

export default App