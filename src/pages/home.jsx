import React, { useState } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import CardStartGame from '../components/game/cardstartgame';

const HomePage = () => {
  const [showCard, setShowCard] = useState(false);

  const closeModal = () => {
    setShowCard(false);
  };

  const startAdventure = () => {
    closeModal(); // cerrar cualquier modal al presionar "Empezar" o iniciar aventura
  };

  const handleStartClick = () => {
    setShowCard(false); // restablece showCard
    setShowCard(true); // showCard a true al presionar "Empezar"
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.50"
      p={4}
    >
      <Heading as="h1" size="2xl" mb={4} textAlign="center">
        Elige tu Propia Aventura
      </Heading>
      <Text fontSize="xl" mb={4} textAlign="center">
        Tu aventura empieza aquí. 
        <br/>
        Aterriza en el bosque y explóralo con nosotros.
      </Text>
      <Button colorScheme="teal" size="lg" onClick={handleStartClick}>
        Empezar
      </Button>
      {showCard && <CardStartGame onClose={closeModal} onStartAdventure={startAdventure} />}
    </Box>
  );
};

export default HomePage;
