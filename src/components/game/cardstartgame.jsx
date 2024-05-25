// src/components/CardStartGame.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Button, Container, Text, useColorModeValue } from '@chakra-ui/react';
import AdventureGame from './cardadventuregame';

const CardStartGame = ({ onClose, onStartAdventure }) => {
  const [section, setSection] = useState(1); // Estado para controlar la sección del modal
  const [showAdventure, setShowAdventure] = useState(false); // Estado para controlar la visibilidad de CardAdventureGame

  const bgColor = useColorModeValue('white', 'gray.800'); // Usar useColorModeValue fuera de la renderización condicional

  const handleNextClick = () => {
    // Avanzar a la siguiente sección
    setSection(section + 1);
  };

  const handleStartAdventure = () => {
    setShowAdventure(true); // Mostrar CardAdventureGame
  };

  if (showAdventure) {
    return <AdventureGame />; // Mostrar CardAdventureGame cuando showAdventure es verdadero
  }

  return (
    <Box
      bg="rgba(0, 0, 0, 0.5)" // Fondo oscuro transparente
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
      onClick={onClose} // Cerrar modal al hacer clic fuera del contenido
    >
      <Container maxW="lg" textAlign="center" onClick={(e) => e.stopPropagation()}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contenido de la primera sección */}
          {section === 1 && (
            <Box
              bg={bgColor}
              p={8}
              borderRadius="lg"
              boxShadow="xl"
              onClick={(e) => e.stopPropagation()} // Evitar que se cierre al hacer clic en el contenido
            >
              <Text fontSize="xl" mb={4}>
                Contexto:
              </Text>
              <Text mb={4}>
                Después de un aterrizaje de emergencia en el bosque, la tripulación de
                cabina se encuentra perdida y debe trabajar en equipo para sobrevivir y
                encontrar ayuda.
              </Text>
              <Button colorScheme="teal" size="lg" mb={6} onClick={handleNextClick}>
                Siguiente
              </Button>
            </Box>
          )}

          {/* Contenido de la segunda sección */}
          {section === 2 && (
            <Box
              bg={bgColor}
              p={8}
              borderRadius="lg"
              boxShadow="xl"
              onClick={(e) => e.stopPropagation()} // Evitar que se cierre al hacer clic en el contenido
            >
              <Text fontSize="xl" mb={4}>
                Instrucciones:
              </Text>
              <Text mb={4}>
                Imagina que sos parte de la tripulación de cabina en un vuelo que se
                estrelló en el bosque. Tendrás que tomar decisiones como equipo para
                navegar por el bosque, buscar agua, comida y refugio, y encontrar ayuda.
                Después de cada decisión, se presentará la siguiente situación basada en
                la decisión tomada anteriormente. Trabaja en equipo para tomar decisiones
                sabias y garantizar la supervivencia de todos los miembros de la tripulación
                y los pasajeros.
              </Text>
              <Button colorScheme="teal" size="lg" mb={6} onClick={handleNextClick}>
                Siguiente
              </Button>
            </Box>
          )}

          {/* Contenido de la tercera sección */}
          {section === 3 && (
            <Box
              bg={bgColor}
              p={8}
              borderRadius="lg"
              boxShadow="xl"
              onClick={(e) => e.stopPropagation()} // Evitar que se cierre al hacer clic en el contenido
            >
              <Text fontSize="xl" mb={4}>
                Objetivo:
              </Text>
              <Text mb={4}>
                Mantener la seguridad y el bienestar de la tripulación y los pasajeros
                mientras buscan ayuda y enfrentan desafíos en el desierto.
              </Text>
              <Button colorScheme="teal" size="lg" mb={6} onClick={handleStartAdventure}>
                Comenzar mi aventura
              </Button>
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default CardStartGame;