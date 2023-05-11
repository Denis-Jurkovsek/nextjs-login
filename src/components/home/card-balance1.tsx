import { Button, Card, Text } from '@nextui-org/react'
import React from 'react'
import { Community } from '../icons/community'
import { Box } from '../styles/box'
import { Flex } from '../styles/flex'

export const CardBalance1 = () => {
  return (
    <Card
      css={{
        width: '375px',
        bg: 'transparent',
        borderRadius: '$xl',
        px: '$6'
      }}
    >
      <Card.Body css={{ py: '$10' }}>
        <Flex css={{ gap: '$5' }}>
          <Community />
          <Flex direction={'column'}>
            <Text span css={{ color: '$success' }}>
              Eintrittt
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: '$6', py: '$4' }} align={'center'}>
          <Text span size={'$xl'} css={{ color: 'white' }} weight={'semibold'}>
            6312
          </Text>
          <Text span css={{ color: '' }} size={'$xs'}>
            + 4.5%
          </Text>
        </Flex>
      </Card.Body>
    </Card>
  )
}
