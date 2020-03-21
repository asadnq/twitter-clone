import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Post, Avatar } from 'components';
import { SideColumn } from './SideColumn';
import { FaRegImage, FaRegSmile, FaRegChartBar } from 'react-icons/fa';
import { MdGif } from 'react-icons/md';
import './Home.css';

interface Props {}

interface User {
  username: string;
  display_name: string;
}

interface Post {
  id: number;
  description: string;
  user: User;
}

const POST_URI = 'http://localhost:3333/post';

export const Home: React.FC<Props> = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(POST_URI)
      .then((_) => _.json())
      .then((res) => {
        console.log('post', res);
        setPosts(res);
      })
      .catch((err) => {
        console.error(err);
        setPosts([]);
      });
  }, []);

  const renderPosts = () => {
    if (posts.length < 1) {
      return <h5>No post found</h5>;
    }

    return posts.map((post) => {
      return <Post key={post.id} content={post.description} {...post.user} />;
    });
  };

  return (
    <div className="flex justify-between">
      <PostContainer>
        <div className="sticky px-3 h-12 flex flex-column border-gray-700 border-b">
          <div className="flex flex-row items-center">
            <h2 className="text-white font-extrabold">
              <span>Home</span>
            </h2>
          </div>
        </div>
        {/* Create thread */}
        <div className="flex flex-row pt-3 px-6 mb-3 m-2">
          <div className="mr-4 flex-shrink-0">
            <Avatar />
          </div>
          <div className="w-full pt-2 flex flex-col">
            <div className="w-full py-2">
              <input
                className="text-white border-transparent bg-transparent w-full focus:outline-none"
                placeholder="What's happening?"
              />
            </div>
            <div className="flex flex-row justify-between items-end">
              <div className="text-white flex flex-row items-end">
                <div className="icon-wrapper">
                  <FaRegImage />
                </div>
                <div className="icon-wrapper">
                  <MdGif />
                </div>
                <div className="icon-wrapper">
                  <FaRegChartBar />
                </div>
                <div className="icon-wrapper">
                  <FaRegSmile />
                </div>
              </div>
              <div>
                <button className="text-white font-bold rounded-full bg-blue-500 p-2 px-4">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Create thread */}
        <div style={{ backgroundColor: 'rgb(37, 51, 65)', height: 10 }}></div>
        <>{renderPosts()}</>
      </PostContainer>
      <SideColumn />
    </div>
  );
};

const PostContainer = styled.div.attrs(() => ({
  className: 'flex flex-col',
}))`
  background-color: rgb(21, 32, 43);
  border-color: rgb(56, 68, 77);
  border-width: 1px;
  border-style: solid;
  width: 600px;

  &:last-child {
    border-bottom: 0px;
  }
`;
