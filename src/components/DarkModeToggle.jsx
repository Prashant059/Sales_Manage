import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
      size="lg"
      colorScheme="purple"
    />
  );
};

export default DarkModeToggle;
