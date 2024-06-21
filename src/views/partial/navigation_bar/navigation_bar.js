import React from 'react'
import './navigation_bar.css'
import { RouteDetails } from '../../../constant/routes/routes'
export const NavigationBar = () => {

  const headerText = "Efe Işık - Kişisel Website";
  return (
    <nav className='navigation_bar'>
        <div className='navigation_bar_header'>{headerText}</div>
        <NavigationBarRoutes>
            {
                Object.values(RouteDetails).map((route)=>{
                  return <NavigationBarRoutesItem key={route.id} id={route.id} content={route.content} onClick={route.onClick}/>
                })
            }
        </NavigationBarRoutes>
    </nav>
  )
}

function NavigationBarRoutes({ children }) {
    return (
      <div className='navigation_bar_routes'>
          {children}
      </div>
    )
}

function NavigationBarRoutesItem({onClick,id, content}) {
    return (
      <div onClick={onClick} className='navigation_bar_routes_item' id={id}>{content}</div>
    );
}