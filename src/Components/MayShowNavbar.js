import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const MayShowNavbar = ({children}) => {

  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false)

  useEffect(() => {
    //console.log("location: ", location)
    if(location.pathname.match(/gallery/)){
        setShowNavBar(false)
    }else{
        setShowNavBar(true) 
    }
  }, [location])

  return (
    <div>{showNavBar && children}</div>
  )
}

export default MayShowNavbar
