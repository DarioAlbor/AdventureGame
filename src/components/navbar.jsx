import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import CardStartGame from '../components/game/cardstartgame';
import HelpGame from './buttons/helpgame';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isCardOpen, onToggle: onCardToggle } = useDisclosure();
  const { isOpen: isHelpOpen, onToggle: onHelpToggle } = useDisclosure();

  const handleStartGameClick = () => {
    onCardToggle();
  };

  const handleHelpGameClick = () => {
    onHelpToggle();
  };

  return (
    <Box>
      {/* Navbar de escritorio */}
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'auto', md: 'auto' }}>
          <Text
            textAlign={useColorModeValue('center', 'left')}
            fontFamily={'heading'}
            fontWeight="bold"
            color={useColorModeValue('gray.800', 'white')}
          >
            Aterrizaje en el bosque
          </Text>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          display={{ base: 'none', md: 'flex' }}
        >
          <Button
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}
            onClick={handleStartGameClick} // Abre el componente CardStartGame al hacer clic
          >
            EMPEZAR JUEGO
          </Button>
          <Button
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}
            onClick={handleHelpGameClick} // Abre el componente HelpGame al hacer clic
          >
            AYUDA
          </Button>
        </Stack>
      </Flex>

      {/* MobileNav */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} onCardToggle={onCardToggle} onHelpToggle={onHelpToggle} />
      </Collapse>
      {/* CardStartGame */}
      <Collapse in={isCardOpen} animateOpacity>
        <CardStartGame />
      </Collapse>
      {/* HelpGame */}
      <Collapse in={isHelpOpen} animateOpacity>
        <HelpGame />
      </Collapse>
    </Box>
  );
};

// Componente MobileNav
const MobileNav = ({ onHelpToggle, onCardToggle }) => {
  const handleStartGameClick = () => {
    onCardToggle();
  };

  const handleHelpGameClick = () => {
    onHelpToggle();
  };

  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }} spacing={20}>
      <MobileNavItem label="Ayuda" onClick={handleHelpGameClick} />
      <br/>
      <MobileNavItem label="Empezar juego" onClick={handleStartGameClick} />
    </Stack>
  );
};

// Componente MobileNavItem
const MobileNavItem = ({ label, onClick }) => {
  return (
    <Box
      py={2}
      as="button"
      justifyContent="space-between"
      alignItems="center"
      _hover={{
        textDecoration: 'none',
      }}
      onClick={onClick}
    >
      <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
        {label}
      </Text>
    </Box>
  );
};

export default Navbar;
