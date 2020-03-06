import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'components';

interface Props {
  username: string;
  display_name: string;
  content: string;
}

export const Post: React.FC<Props> = (props) => {
  return (
    <div className="sm:w-100">
      <PostWrapper>
        <div className="flex">
          <div className="mr-4 flex-shrink-0 pt-1">
            <Avatar />
          </div>
          <article className="text-left">
            <div className="flex w-max-100">
              <span className="text-base font-black">{props.display_name}</span>
              <Username>@{props.username}</Username>
            </div>
            <p className="text-sm mt-1">{props.content}</p>
          </article>
        </div>
      </PostWrapper>
    </div>
  );
};

const PostWrapper = styled.div.attrs(() => ({
  className: 'w-auto min-w-md overflow-hidden py-4 px-6',
}))`
  border-bottom: 1px solid rgb(56, 68, 77);
  color: #fff;
`;

const Username = styled.div`
  color: rgb(136, 153, 166);
  margin-left: 5px
`;