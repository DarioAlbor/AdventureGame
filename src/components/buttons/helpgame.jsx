import React from 'react';
import { Box, Text, Button, CloseButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CardHelpGame = () => {
  const navigate = useNavigate();

  const handleCloseHelp = () => {
    navigate('/');
    window.location.reload(); // recargar página al cerrar el componente (para reiniciar todos los estados)
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      bottom={0}
      right={0}
      bg="rgba(0, 0, 0, 0.8)" // oscuro con opacidad
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="modal" // encima de otros elementos
      onClick={handleCloseHelp} // se cierra al hacer clic en el fondo gris
    >
      <Box
        p={6}
        bg="white"
        color="gray.800"
        borderRadius="md"
        border="1px solid"
        borderColor="gray.200"
        maxW="90vw" 
        maxH="90vh" 
        overflowY="auto" //  para permitir desplazamiento vertical si el contenido excede el tamaño del recuadro
        textAlign="center"
        onClick={(e) => e.stopPropagation()} 
      >
        <CloseButton
          position="absolute"
          right={4}
          top={4}
          onClick={handleCloseHelp}
        />
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Instrucciones
        </Text>
        <Text mb={4}>
          Imagina que sos parte de la tripulación de cabina en un vuelo que se estrelló en el bosque.<br/>
          Tendrás que tomar decisiones como equipo para navegar por el bosque, buscar agua, comida y refugio, y encontrar ayuda.<br/>
          Después de cada decisión, se presentará la siguiente situación basada en la decisión tomada anteriormente.<br/>
          Trabaja en equipo para tomar decisiones sabias y garantizar la supervivencia de todos los miembros de la tripulación y los pasajeros.
        </Text>
        <Box mt={4}>
          <Button onClick={handleCloseHelp} colorScheme="blue">
            Cerrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CardHelpGame;
