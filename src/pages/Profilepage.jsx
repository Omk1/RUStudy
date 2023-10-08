import React from 'react'
import { Layout } from '../components/Layout'
import { Badge, chakra, Code, Container, Heading } from '@chakra-ui/react'
import { Card } from '../components/Card'
import { useAuth } from '../contexts/AuthContext'

export default function Profilepage() {
  const { currentUser } = useAuth()
  const displayName = currentUser.displayName 
  return (
    <Layout>
      <Heading>
        Profile page
        <Badge colorScheme='green' fontSize='lg' mx={4}>
          Protected Page
        </Badge>
      </Heading>

      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre>
          <p>
            Name: {displayName}
            <br/>
            Email: {currentUser.email}
            <br/>
            Verfied: {currentUser.emailVerified ? 'Yes' : 'No'} 
          </p>
    
        </chakra.pre>
      </Container>
    </Layout>
  )
}
