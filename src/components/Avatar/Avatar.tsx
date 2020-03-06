import React from 'react';
import NoPict from 'images/no-pict.png';

interface Props {
  image?: string;
}

export const Avatar:React.FC<Props> = (props) => {
  return (
    <div>
        <img src={props.image || NoPict} className="w-12 h-12 rounded-full" alt="avatar" />
    </div>
  );
};
