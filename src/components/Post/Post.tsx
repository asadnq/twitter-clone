import React from 'react';
import { Avatar } from 'components';
import { Box, Flex, Spacer, Text, Paragraph, Article } from 'components/common';
import { FaRetweet, FaHeart, FaReply } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Props {
  username: string;
  display_name: string;
  content: string;
}

export const Post: React.FC<Props> = (props: Props) => {
  return (
    <Box width={[1]}>
      <Box overflow="hidden" py={4} px={6} clickable>
        <Flex>
          <Flex mr={4} pt={1} flexShrink={0}>
            <Avatar />
          </Flex>
          <Article textAlign="left" width="100%">
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
            <Spacer>
              <PostActionBar />
            </Spacer>
          </Article>
        </Flex>
      </Box>
    </Box>
  );
};

interface PostActionBarProps {
  /*replyCount: number;
  onReplyClick: () => void;
  retweetCount: number;
  onRetweetClick: () => void;
  likeCount: number;
  onLikeClick: () => void;*/
  [key: string]: any;
}

export const PostActionBar: React.FC<PostActionBarProps> = (props) => {
  const iconSize = 12;

  const postActions = [
    {
      id: 'action-reply',
      sequence: 0,
      icon: <FaReply size={iconSize} color="inherit" />,
      value: 24,
    },
    {
      id: 'action-retweet',
      sequence: 1,
      icon: <FaRetweet size={iconSize} color="inherit" />,
      value: 33,
    },
    {
      id: 'action-like',
      sequence: 2,
      icon: <FaHeart size={iconSize} color="inherit" />,
      value: 71,
    },
  ];

  return (
    <Box>
      <Flex flexDirection="row" justifyContent="space-between" maxWidth={425}>
        {postActions.map((action) => {
          return <PostActionItem key={action.id} {...action} />;
        })}
      </Flex>
    </Box>
  );
};

// TODO: Create colors constant

const COLORS = {
  TEXT_GRAY: 'rgb(136, 153, 166)',
};

const PostActionItem = ({
  id,
  icon,
  value,
}: {
  id: any;
  icon: JSX.Element;
  value: number | string;
}) => {
  return (
    <Box color={COLORS.TEXT_GRAY} clickable>
      <Flex flexDirection="row" alignItems="center">
        <Spacer mr={2}>{icon}</Spacer>
        <Spacer>
          <Text color="inherited" fontSize={12}>
            {value}
          </Text>
        </Spacer>
      </Flex>
    </Box>
  );
};
