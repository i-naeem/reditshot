import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      colorScheme='green'
      aria-label='Toggle Theme'
      onClick={toggleColorMode}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      size='sm'
      {...props}
    />
  );
};
