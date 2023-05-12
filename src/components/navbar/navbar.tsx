import { Input, Link, Navbar } from '@nextui-org/react'
import React from 'react'

import { SearchIcon } from '../icons/searchicon'
import { Box } from '../styles/box'
import { BurguerButton } from './burguer-button'
import { NotificationsDropdown } from './notifications-dropdown'
import { UserDropdown } from './user-dropdown'

interface INavbarWrapperProps {
  children: React.ReactNode
}

export const NavbarWrapper = ({ children }: INavbarWrapperProps) => {
  const collapseItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out'
  ]
  return (
    <Box
      css={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <Navbar
        isBordered
        css={{
          borderBottom: '1px solid $border',
          justifyContent: 'space-between',
          width: '100%',
          '@md': {
            justifyContent: 'space-between'
          },

          '& .nextui-navbar-container': {
            border: 'none',
            maxWidth: '100%',

            gap: '$6',
            '@md': {
              justifyContent: 'space-between'
            }
          }
        }}
      >
        <Navbar.Content showIn='md'>
          <BurguerButton />
        </Navbar.Content>
        <Navbar.Content
          css={{
            width: '100%',
            '@xsMax': {
              pl: '25px'
            }
          }}
        >
          <Input
            clearable
            contentLeft={<SearchIcon fill='var(--nextui-colors-accents6)' size={16} />}
            contentLeftStyling={false}
            css={{
              w: '100%',
              transition: 'all 0.2s ease',
              '@xsMax': {
                w: '100%'
              },
              '& .nextui-input-content--left': {
                h: '100%',
                ml: '$4',
                dflex: 'center'
              }
            }}
            placeholder='Barcode eingeben..'
          />
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Content hideIn={'md'}>
            <NotificationsDropdown />
          </Navbar.Content>

          <Navbar.Content>
            <UserDropdown />
          </Navbar.Content>
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor='secondary'
              css={{
                color: index === collapseItems.length - 1 ? '$error' : ''
              }}
              isActive={index === 2}
            >
              <Link
                color='inherit'
                css={{
                  minWidth: '100%'
                }}
                href='#'
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      {children}
    </Box>
  )
}
