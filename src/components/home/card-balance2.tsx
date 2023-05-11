import { Card, Text } from '@nextui-org/react'
import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/all'

import { Flex } from '../styles/flex'

export const CardBalance2 = () => {
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
          <BsArrowUpCircleFill size={20} color={'gray'} />
          <Flex direction={'column'}>
            <Text span css={{ color: '$red600' }}>
              Austritte
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: '$6', py: '$4' }} align={'center'}>
          <Text span size={'$xl'} weight={'semibold'}>
            481
          </Text>
          <Text span css={{ color: '$red600' }} size={'$xs'}>
            - 4.5%
          </Text>
        </Flex>
      </Card.Body>
    </Card>
  )
}
