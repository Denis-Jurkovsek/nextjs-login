import React from 'react'

import { useLockedBody } from '../hooks/useBodyLock'
import { NavbarWrapper } from '../navbar/navbar'
import { SidebarWrapper } from '../sidebar/sidebar'
import { WrapperLayout } from './layout.styles'
import { SidebarContext } from './layout-context'

interface ILayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [, setLocked] = useLockedBody(false)
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    setLocked(!sidebarOpen)
  }

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar
      }}
    >
      <WrapperLayout>
        <SidebarWrapper />
        <NavbarWrapper>{children}</NavbarWrapper>
      </WrapperLayout>
    </SidebarContext.Provider>
  )
}
