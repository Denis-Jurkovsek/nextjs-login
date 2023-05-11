import { Card, Text } from '@nextui-org/react'
import React from 'react'
import { BsArrowDownCircleFill } from 'react-icons/all'

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
          <BsArrowDownCircleFill size={20} color={'grey'} />
          <Flex direction={'column'}>
            <Text span css={{ color: '$green600' }}>
              Eintritt
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: '$6', py: '$4' }} align={'center'}>
          <Text span size={'$xl'} css={{ color: 'white' }} weight={'semibold'}>
            6312
          </Text>
          <Text span css={{ color: '$green600' }} size={'$xs'}>
            + 2.1%
          </Text>
        </Flex>
      </Card.Body>
    </Card>
  )
}
