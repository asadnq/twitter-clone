import React from 'react';
import { Avatar } from 'components';
import { Box, Flex, Spacer, Text, Paragraph, Article } from 'components/common';

interface Props {
  username: string;
  display_name: string;
  content: string;
}

export const Post: React.FC<Props> = (props) => {
  return (
    <Box width={[1]}>
      <Box overflow="hidden" py={4} px={6}>
        <Flex>
          <Flex mr={4} pt={1} flexShrink={0}>
            <Avatar />
          </Flex>
          <Article textAlign="left">
            <Flex maxWidth={'100%'}>
              <Text fontSize="base" fontWeight="bold">
                {props.display_name}
              </Text>
              <Spacer marginLeft={1}>
                <Text color="rgb(136,153,166)">@{props.username}</Text>
              </Spacer>
            </Flex>
            <Spacer mt={1}>
              <Paragraph size="sm">{props.content}</Paragraph>
            </Spacer>
          </Article>
        </Flex>
      </Box>
    </Box>
  );
};
