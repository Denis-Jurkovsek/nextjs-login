import { Button, Card, Text } from '@nextui-org/react'
import React from 'react'
import { BsPeopleFill } from 'react-icons/all'

import { Flex } from '../styles/flex'

export const CardBalance3 = () => {
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
          <BsPeopleFill size={20} color={'gray'} />
          <Flex direction={'column'}>
            <Text span css={{ color: '$warning' }}>
              Doppelverwendungen
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: '$6', py: '$4' }} align={'center'}>
          <Button size={'sm'} color={'success'}>
            <Text size={'$xs'} weight={'bold'}>
              6 Prüfen
            </Text>
          </Button>
          <Text span css={{ color: '$green600' }} size={'$xs'}>
            + 4.5%
          </Text>
        </Flex>
      </Card.Body>
    </Card>
  )
}
