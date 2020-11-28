import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LogoContext = React.createContext()

export const LogoProvider = (props) => {
  const [logoPlay, setLogoPlay] = useState(true)
  const [logoDirection, setLogoDirection] = useState(1)

  return (<LogoContext.Provider value={{logoPlay, setLogoPlay, logoDirection, setLogoDirection}}>
    {props.children}
  </LogoContext.Provider>
  )
}
