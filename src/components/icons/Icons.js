import React from 'react';

export const EmojiIcon = ({ size, color }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      //xmlns:xlink="http://www.w3.org/1999/xlink"
      x="10px"
      y="10px"
      viewBox="0 0 512 512"
      style={{ width: size, height: size, fill: color }}
      //style="enable-background:new 0 0 512 512;"
      //xml:space="preserve"
    >
      <g>
        <g>
          <path
            d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480
			C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"
          />
        </g>
      </g>
      <g>
        <g>
          <circle cx="176" cy="176" r="32" />
        </g>
      </g>
      <g>
        <g>
          <circle cx="336" cy="176" r="32" />
        </g>
      </g>
      <g>
        <g>
          <path d="M368,256c0,61.856-50.144,112-112,112s-112-50.144-112-112h-32c0,79.529,64.471,144,144,144s144-64.471,144-144H368z" />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

EmojiIcon.defaultProps = {
  size: 10,
  color: "rgba(29,161,242,1.00)"
}