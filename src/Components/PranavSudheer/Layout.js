import React from 'react'
import { Container } from '@chakra-ui/react'
import { NavbarPS } from './NavbarPS'

export function Layout(props) {
  return (
    <>
      <NavbarPS />
      <Container maxW='container.lg'>{props.children}</Container>
    </>
  )
}