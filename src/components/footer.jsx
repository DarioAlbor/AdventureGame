import {
  Box,
  Container,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SmallWithSocial() {
  const currentYear = new Date().getFullYear(); // Obtener el año actual

  return (
    <Box
      bg={'gray.600'} // Fondo gris oscuro
      color={useColorModeValue('gray.50', 'gray.200')}
      py={4}>
      <Container
        maxW={'6xl'}
        textAlign={'center'}
        px={{ base: '0.5rem', md: '1rem' }}>
        <Text>{`© ${currentYear} Todos los derechos reservados.`}</Text>
      </Container>
    </Box>
  )
}
