// src/components/game/AdventureGame.jsx
import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Stack, CloseButton } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useNavigate } from 'react-router-dom';

const CardAdventureGame = () => {
    const [currentPoint, setCurrentPoint] = useState(1);
    const [showAdventureGame] = useState(true);
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();
    const navigate = useNavigate();
    const safePoints = [17, 18, 21, 22, 24, 27, 28, 30]; // Definir safePoints

  const points = {
    1: {
      text: "Estás en medio del bosque después de un accidente de avión. Sos parte de la tripulación de cabina y debes trabajar en equipo para sobrevivir y encontrar ayuda. ¿Qué camino tomarás?",
      options: [
        { text: "Evaluar a los pasajeros", nextPoint: 2 },
        { text: "Evaluar la cantidad de agua y los alimentos disponibles para sobrevivir", nextPoint: 3 },
      ],
    },
    2: {
      text: "Evalúas a los pasajeros y descubrís que algunos están heridos. Deciden buscar un lugar seguro para tratar a los heridos.",
      options: [
        { text: "Buscar algún refugio cercano", nextPoint: 4 },
        { text: "Improvisar refugio con los materiales disponibles", nextPoint: 5 },
      ],
    },
    3: {
      text: "Evalúan todo y determinan que hay suficiente agua para un día pero que no hay suficientes alimentos para saciar a todos.",
      options: [
        { text: "Buscar agua", nextPoint: 6 },
        { text: "Buscar alimentos", nextPoint: 7 },
      ],
    },
    4: {
      text: "Se dividen en la búsqueda y encuentran dos lugares diferentes en donde refugiarse.",
      options: [
        { text: "Cueva cercana", nextPoint: 8 },
        { text: "Cabaña abandonada", nextPoint: 9 },
      ],
    },
    5: {
      text: "Construyen un refugio improvisado con ramas y hojas. El proceso es largo, pero logran crear una estructura básica que los protegerá del frío y la lluvia.",
      options: [
        { text: "Hacer una fogata para mantenerse calientes", nextPoint: 10 },
        { text: "Descansar sin hacer una fogata", nextPoint: 11 },
      ],
    },
    6: {
      text: "Deciden buscar agua para mantenerse hidratados. Caminan durante horas, siguiendo el sonido de un arroyo cercano. El sol está descendiendo y la luz se debilita, pero finalmente encuentran un arroyo con agua clara.",
      options: [
        { text: "Seguir el curso del arroyo", nextPoint: 12 },
        { text: "Buscar un lago o estanque", nextPoint: 13 },
      ],
    },
    7: {
      text: "Deciden buscar alimentos para mantener la energía. Caminan por el bosque en busca de algo comestible. Encuentran varios tipos de bayas y setas, pero no están seguros de cuáles son seguros para consumir.",
      options: [
        { text: "Buscar frutas o bayas comestibles", nextPoint: 14 },
        { text: "Intentar cazar un animal pequeño", nextPoint: 15 },
      ],
    },
    8: {
      text: "Encuentran una cueva cercana y se refugian allí para protegerse del clima y tratar a los heridos.",
      options: [
        { text: "Descansar y esperar en la cueva", nextPoint: 16 },
        { text: "Explorar la cueva en busca de recursos", nextPoint: 17 },
      ],
    },
    9: {
      text: "Caminan durante un buen rato y finalmente llegan a la cabaña vieja y en ruinas.",
      options: [
        { text: "Inspeccionar la cabaña por dentro", nextPoint: 18 },
        { text: "Montar un campamento afuera de la cabaña", nextPoint: 19 },
      ],
    },
    10: {
      text: "Encienden una fogata para mantenerse caliente durante la noche. La luz y el calor de la fogata ahuyentan a los depredadores y les permite descansar cómodamente.",
      options: [
        { text: "Mantener la fogata encendida toda la noche", nextPoint: 20 },
        { text: "Apagar la fogata antes de dormir", nextPoint: 21 },
      ],
    },
    11: {
      text: "Deciden descansar sin hacer una fogata para evitar llamar la atención de los depredadores. Pasan la noche abrigados en su refugio improvisado.",
      options: [
        { text: "Mantener una vigilancia durante la noche", nextPoint: 22 },
        { text: "Dormir profundamente para recuperar energías", nextPoint: 23 },
      ],
    },
    12: {
      text: "Siguen el curso del arroyo, esperando que los lleve a una fuente mayor de agua o a un lugar habitado. El arroyo los guía a través de un terreno escarpado y lleno de vegetación densa. Durante su travesía, se encuentran con varios obstáculos, como rocas resbaladizas y ramas caídas, que dificultan el avance. A pesar de los desafíos, siguen adelante, motivados por la necesidad de encontrar ayuda. Finalmente, después de horas de caminata, el arroyo desemboca en una hermosa cascada que cae en una pequeña laguna. La vista es impresionante y, por un momento, se sienten aliviados de haber encontrado un lugar tan sereno.",
      options: [
        { text: "Descansar junto a la cascada", nextPoint: 24 },
        { text: "Explorar los alrededores de la laguna", nextPoint: 25 },
      ],
    },
    13: {
      text: "Deciden alejarse del arroyo y buscar un lago o estanque, esperando encontrar agua potable y quizás una mejor oportunidad de rescate. Caminan durante lo que parecen ser horas interminables, pero finalmente, ven un destello de agua a través de los árboles. Se acercan y descubren un lago grande y tranquilo, rodeado de altos pinos y arbustos.",
      options: [
        { text: "Beber del lago y descansar", nextPoint: 26 },
        { text: "Explorar los alrededores del lago", nextPoint: 27 },
      ],
    },
    14: {
      text: "Después de caminar durante un rato, encuentran un arbusto con bayas que parecen comestibles. Sin embargo, recuerdas que algunas bayas pueden ser venenosas.",
      options: [
        { text: "Probar las bayas", nextPoint: 28 },
        { text: "Buscar otras fuentes de alimento", nextPoint: 29 },
      ],
    },
    15: {
      text: "Usan ramas y piedras para improvisar una trampa. Después de un rato, ves un conejo cerca de la trampa.",
      options: [
        { text: "Esperar pacientemente para atrapar al conejo", nextPoint: 30 },
        { text: "Intentar atrapar al conejo con tus propias manos", nextPoint: 31 },
      ],
    },
    16: {
      text: "Durante la noche, un oso atraído por sus olores se acerca a la entrada de la cueva. Sin una fogata ni protección adecuada, el oso los ataca. Lamentablemente, no logran sobrevivir. ¡Su aventura termina aquí de manera trágica!",
      options: [],
    },
    17: {
      text: "Encuentran agua fresca y algunos alimentos no perecederos dejados por excursionistas anteriores. También descubren una salida alternativa de la cueva que los lleva a un sendero bien marcado. Siguen el sendero y finalmente se encuentran con un grupo de rescatistas. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
      options: [],
    },
    18: {
      text: "Encuentran que la cabaña, aunque vieja, está relativamente segura y tiene suministros básicos dejados por anteriores ocupantes. Pasan la noche en la cabaña y al amanecer, encuentran una radio con la cual puedes pedir ayuda. Los rescatistas llegan y los llevan a un lugar seguro. ¡Su aventura termina aquí de manera segura!",
      options: [],
    },
    19: {
      text: "Durante la noche, una tormenta repentina hace que un árbol caiga sobre su campamento. No logran escapar a tiempo y quedan atrapados bajo las ramas. Lamentablemente, no logran sobrevivir. ¡Su aventura termina aquí de manera trágica!",
      options: [],
    },
    20: {
      text: "Durante la noche, ven luces a lo lejos y deciden investigar. Resulta ser un equipo de rescate que había visto el humo de la fogata. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
      options: [],
    },
    21: {
      text: "Sin la protección de la fogata, durante la noche un grupo de lobos se acerca al campamento y los ataca. No logran sobrevivir al ataque. ¡Su aventura termina aquí de manera trágica!",
      options: [],
    },
    22: {
      text: "Mantienen una vigilancia durante la noche y evitan cualquier peligro. Al amanecer, ven un helicóptero de rescate en la distancia y logran llamar su atención. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
      options: [],
    },
    23: {
      text: "Durante la noche, un grupo de depredadores se acerca y, al estar todos dormidos profundamente, no logran reaccionar a tiempo. Lamentablemente, no logran sobrevivir. ¡Su aventura termina aquí de manera trágica!",
      options: [],
    },
    24: {
      text: "Mientras descansan junto a la cascada, ven un helicóptero de rescate sobrevolando la zona. Logran hacer señales y son rescatados. ¡Su aventura termina aquí de manera segura!",
      options: [],
    },
    25: {
      text: "Mientras exploran los alrededores de la laguna, se encuentran con un grupo de excursionistas que los ayudan y llaman a los rescatistas. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
      options: [],
    },
    26: {
      text: "Mientras descansan junto al lago, beben el agua sin purificarla y comienzan a sentirse muy enfermos debido a una bacteria en el agua. No logran sobrevivir. ¡Su aventura termina aquí de manera trágica!",
      options: [],
    },
    27: {
      text: "Mientras exploran los alrededores del lago, encuentran una cabaña de guardabosques. El guardabosques los ayuda y llama a los rescatistas. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
      options: [],
    },
    28: {
      text: "Deciden probar las bayas y resulta que son venenosas. No logran sobrevivir. ¡Su aventura termina aquí de manera trágica!",
      options: [],
    },
    29: {
      text: "Encuentran un árbol con frutos comestibles y logran reunir suficiente comida para todos. Con energía renovada, continúan su búsqueda de ayuda y finalmente encuentran un grupo de excursionistas que los ayudan. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
      options: [],
    },
    30: {
      text: "Esperan pacientemente y logran atrapar al conejo. Esto les proporciona suficiente alimento para mantenerse hasta que sean rescatados. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
      options: [],
    },
    31: {
      text: "Intentan atrapar al conejo con sus propias manos, pero el conejo los muerde y resulta ser portador de una enfermedad. No logran sobrevivir. ¡Su aventura termina aquí de manera trágica!",
      options: [],
    },
  };


  useEffect(() => {
    const safePoints = [17, 18, 21, 22, 24, 27, 28, 30]; // Definir safePoints
    if (safePoints.includes(currentPoint)) {
        setShowConfetti(true);
    } else {
        setShowConfetti(false);
    }
}, [currentPoint]);

const handleOptionClick = (nextPoint) => {
    setCurrentPoint(nextPoint);
};

const handleCloseAdventureGame = () => {
    navigate(0); // Recargar la página
};

return (
    <>
        {showAdventureGame && (
                    <Box
              position="fixed"
              top={0}
              left={0}
              bottom={0}
              right={0}
              bg="rgba(0, 0, 0, 0.8)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              zIndex="3" // Z-index del fondo negro
              onClick={handleCloseAdventureGame}
                   >
                <Box
                    p={6}
                    bg="white"
                    color="gray.800"
                    borderRadius="md"
                    boxShadow="md"
                    maxW="90vw"
                    maxH="90vh"
                    overflowY="auto"
                    position="relative"
                    zIndex="4" // Z-index del contenedor blanco
                    onClick={(e) => e.stopPropagation()}
                >
                    <CloseButton
                        position="absolute"
                        right={4}
                        top={4}
                        onClick={handleCloseAdventureGame}
                    />
                    <Box mb={4}></Box>
                    <Text mb={4}>{points[currentPoint].text}</Text>
                    <Stack spacing={3}>
                        {points[currentPoint].options.map((option, index) => (
                            <Button
                                key={index}
                                onClick={() => handleOptionClick(option.nextPoint)}
                                colorScheme="black" // Botones de opción en color negro
                                variant="outline"
                                borderWidth="2px"
                                borderColor="gray.200"
                                borderRadius="md"
                                w="auto"
                                h="60px"
                                whiteSpace="normal"
                                wordWrap="break-word"
                                zIndex="9999"
                            >
                                {option.text}
                            </Button>
                        ))}
                    </Stack>
                    {points[currentPoint].options.length === 0 && (
                        <Button
                            mt={4}
                            onClick={() => setCurrentPoint(1)}
                            colorScheme={safePoints.includes(currentPoint) ? "green" : "red"} // Botón "Volver al inicio" verde si es un punto seguro, rojo si no
                            width="100%" // Centra el botón en el medio
                        >
                            Volver al inicio
                        </Button>
                    )}
                </Box>
            </Box>
        )}
        <AnimatePresence>
            {showConfetti && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}
                >
                    <Confetti width={width} height={height} />
                </motion.div>
            )}
        </AnimatePresence>
    </>
);
};

export default CardAdventureGame;