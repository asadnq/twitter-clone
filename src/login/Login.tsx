import React from 'react';
import { Box, Spacer, Flex, Text, H1 } from 'components/common';
import { FaTwitter } from 'react-icons/fa';

const getInputColor = (active: boolean): string =>
  active ? 'rgb(29, 161, 242)' : 'rgb(136, 153, 166)';

const Input: React.FC = (props) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <Flex
      flexDirection="column"
      backgroundColor="rgb(25, 39, 52)"
      borderBottomWidth={2}
      borderColor={getInputColor(focused)}
      borderRadius={2}>
      <Spacer pt={1} px={3}>
        <Text fontSize={2} color={getInputColor(focused)}>
          Phone, email, or username
        </Text>
      </Spacer>
      <Flex flexDirection="row" flexGrow={1} width={'100%'}>
        <Flex alignSelf="flex-start" color="#FFF" width={'100%'}>
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              fontSize: '1.25rem',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              width: '100%',
              padding: '2px 10px 5px',
              outlineStyle: 'none',
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export const Login: React.FC = () => {
  return (
    <Box m={'auto'} mt={5} maxWidth={600}>
      <Flex flexDirection="column" alignItems="center">
        <FaTwitter size={32} color="#ffffff" />
        <H1 fontSize={6} fontWeight="900" mt={5} mb={3}>
          Log in to Twitter{' '}
        </H1>
        <form style={{ width: '100%' }}>
          <Spacer py={2} px={3}>
            <Input />
          </Spacer>
          <Spacer py={2} px={3}>
            <Input />
          </Spacer>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius={9999}
            m={'10px'}
            px={30}
            backgroundColor="rgb(29, 161, 242)">
            <Flex alignItems="center" justifyContent="center" minHeight={49}>
              <Text fontWeight={900}>Log In</Text>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};
