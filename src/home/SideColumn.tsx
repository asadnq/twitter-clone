import React from 'react';
import styled from 'styled-components';
import { formatCount } from 'utils';

const Container = styled.div`
  width: 350px;
`;

const TrendingsContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 15px;
  background-color: rgb(25, 39, 52);
`;

const TrendingHeadingContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: auto;
  border-bottom: 1px solid rgb(56, 68, 77);
  /* position: relative;  */
`;

const TrendItemContainer = styled.div`
  border-bottom: 1px solid rgb(56, 68, 77);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 10px 15px;
`;

const SecondaryTextWrapper = styled.div`
  color: rgb(136, 153, 166);
  padding-top: 2px;
  font-weight: 400;
  font-size: 15px;
`;

export const SideColumn = () => {

  return (
    <Container>
      <div style={{ height: '100%' }}>
        <TrendingsContainer>
          <TrendingHeadingContainer>
            <div className="flex justify-between flex-col">
              <span
                role="heading"
                className="self-start font-extrabold text-xl"
              >
                Trends For you
              </span>
            </div>
          </TrendingHeadingContainer>
          {trendings.map((trending) => (
            <TrendItemContainer key={trending.tagName}>
              {trending.location && (
                <SecondaryTextWrapper>
                  <span className="font-light text-m">
                    Trending in {trending.location}
                  </span>
                </SecondaryTextWrapper>
              )}
              <span className="font-extrabold text-xl">
                #{trending.tagName}
              </span>
              <SecondaryTextWrapper>
                <span className="font-light text-l">
                  {formatCount(trending.tweetCount)} Tweets
                </span>
              </SecondaryTextWrapper>
            </TrendItemContainer>
          ))}
        </TrendingsContainer>
      </div>
    </Container>
  );
};

const trendings = [
  {
    tagName: 'Fizz',
    tweetCount: 3891,
    location: null,
  },
  {
    tagName: 'Buzz',
    tweetCount: 3891,
    location: 'Asgard',
  },
  {
    tagName: 'LoremIpsum',
    tweetCount: 3891,
    location: 'Asgard',
  },
];
