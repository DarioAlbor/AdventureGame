// src/components/game/AdventureGame.jsx
import React, { useState } from 'react';
import { Box, Button, Text, Stack, CloseButton } from '@chakra-ui/react';

const CardAdventureGame = () => {
    const [currentPoint, setCurrentPoint] = useState(1);
    const [showAdventureGame, setShowAdventureGame] = useState(true);

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
      text: "La fogata se sale de control mientras duermen y provoca un incendio en el refugio. Se quedan atrapados en el fuego y no logran escapar. ¡Su aventura termina aquí de manera trágica!",
      options: [],
    },
    21: {
        text: "Duermen profundamente sin el peligro de un incendio. Al amanecer, continúan explorando el bosque y encuentran una cabaña abandonada con suministros de emergencia y una radio. Utilizan la radio para pedir ayuda y son rescatados. ¡Su aventura termina aquí de manera segura!",
        options: [],
      },
      22: {
        text: "Su vigilancia les permite detectar a tiempo la presencia de un grupo de excursionistas que pasan cerca de su refugio. Le hacen señales y los ayudan a salir del bosque. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
        options: [],
      },
      23: {
        text: "Mientras duermen profundamente, una tormenta repentina causa que su refugio colapse, dejándolos expuestos a los elementos. Se despiertan empapados y con hipotermia. Sin ayuda inmediata, sus condiciones empeoran rápidamente y no logran sobrevivir. ¡Su aventura termina aquí de manera trágica!",
        options: [],
      },
      24: {
        text: "El sonido relajante del agua les ayuda a conciliar el sueño. Al despertar, escuchan voces humanas y descubren un grupo de excursionistas que han venido a la cascada. Les ofrecen comida, agua y los llevan de regreso a la civilización. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
        options: [],
      },
      25: {
        text: "Mientras exploran, se adentran demasiado en el bosque y pierden de vista la laguna. La densa vegetación y el terreno irregular los confunden, y terminan perdiéndose aún más en el bosque. Desorientados y sin recursos, no logran encontrar el camino de regreso. ¡Lamentablemente, su aventura termina aquí de manera trágica!",
        options: [],
      },
      26: {
        text: "Sin darse cuenta, el agua del lago está contaminada con bacterias dañinas. Después de beber, comienzan a sentirte extremadamente enfermos y débiles. Sin acceso a atención médica, sus condiciones empeoran rápidamente. ¡Lamentablemente, su aventura termina aquí de manera trágica!",
        options: [],
      },
      27: {
        text: "Encuentran un pequeño muelle con un bote. Deciden utilizar el bote para cruzar el lago y explorar la otra orilla. Allí, encuentran un grupo de campistas los ayudan y los llevan a la civilización. ¡Han sido rescatados y su aventura termina aquí de manera segura!",
        options: [],
      },
      28: {
        text: "Las bayas resultan ser comestibles y les proporcionan la energía que necesitan. Siguen explorando el bosque y finalmente encuentran una cabaña abandonada con suministros de emergencia. Utilizan una radio para pedir ayuda y son rescatados. ¡Su aventura termina aquí de manera segura!",
        options: [],
      },
      29: {
        text: "No logran encontrar más alimentos y la falta de energía los debilita. Sin fuerzas para continuar, se desorientan y se pierden aún más en el bosque. Eventualmente, no logran sobrevivir. ¡Su aventura termina aquí de manera trágica!",
        options: [],
      },
      30: {
        text: "Tu paciencia da frutos y logras atrapar al conejo. Les proporciona suficiente alimento para recuperar sus fuerzas. Al día siguiente, continúan explorando y encuentran un grupo de excursionistas que los ayudan y los llevan a un lugar seguro. ¡Han sido rescatados y su aventura termina aquí!",
        options: [],
      },
      31: {
        text: "El conejo es más rápido que vos y escapa. En tu intento por atraparlo, te lesionas y pierdes más energía de la que puedes permitirte. La herida se infecta y, sin tratamiento adecuado, tu estado empeora rápidamente. ¡Lamentablemente, tu aventura termina aquí!",
        options: [],
      },
    };
    
    const handleOptionClick = (nextPoint) => {
        setCurrentPoint(nextPoint);
      };
    
      const handleCloseAdventureGame = () => {
        setShowAdventureGame(false);
        window.location.reload(); // Recargar la página al cerrar el componente
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
              bg="rgba(0, 0, 0, 0.8)" // Fondo oscuro con opacidad
              display="flex"
              justifyContent="center"
              alignItems="center"
              zIndex="modal" // Para estar por encima de otros elementos
              onClick={handleCloseAdventureGame} // Cerrar al hacer clic en el fondo gris
            >
              <Box
                p={6}
                bg="white" // Fondo blanco
                color="gray.800"
                borderRadius="md"
                boxShadow="md"
                maxW="90vw" // Ancho máximo del 90% del viewport
                maxH="90vh" // Alto máximo del 90% del viewport
                overflowY="auto" // Añadido para permitir desplazamiento vertical si el contenido excede el tamaño del recuadro
                onClick={(e) => e.stopPropagation()} // Evitar el cierre al hacer clic dentro del recuadro
              >
                <CloseButton
                  position="absolute"
                  right={4}
                  top={4}
                  onClick={handleCloseAdventureGame}
                />
                <Text mb={4}>{points[currentPoint].text}</Text>
                <Stack spacing={3}>
                  {points[currentPoint].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleOptionClick(option.nextPoint)}
                      colorScheme="teal"
                      variant="outline" // Bordeado
                      borderWidth="2px" // Grosor del borde
                      borderColor="gray.200" // Color del borde
                      borderRadius="md"
                      w="auto" // Ancho automático
                    >
                      {option.text}
                    </Button>
                  ))}
                </Stack>
                {points[currentPoint].options.length === 0 && (
                  <Button
                    mt={4}
                    onClick={() => setCurrentPoint(1)}
                    colorScheme="red"
                  >
                    Volver al inicio
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </>
      );
    };
    
    export default CardAdventureGame;