import { createContext, useContext, useState } from "react"



const SideBarContext = createContext()
export const useSideBarContext = () => useContext(SideBarContext)

const SideBarContextProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  const contextValue = {
    isOpen,
    setIsOpen,
    handleClose
  }
  return (
    <SideBarContext.Provider value={contextValue}>
      {children}
    </SideBarContext.Provider>
  )
}

export default SideBarContextProvider