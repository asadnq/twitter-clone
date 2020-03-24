import React, { useState } from 'react';
import {
  FaTwitter,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegListAlt,
  FaRegCircle,
} from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';

export const SideMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const getIconColor = (menuName: string): string => {
    return selectedMenu.toLowerCase() === menuName.toLowerCase()
      ? 'rgba(29,161,242,1.00)'
      : '#fff';
  };

  return (
    <header className="flex flex-col items-end" style={{ width: 362.5 }}>
      <div className="relative" style={{ width: 265 }}>
        <div className="fixed top-0 h-full">
          <div className="relative px-3 flex flex-col justify-between">
            <div className="relative flex flex-col my-1">
              <div className="py-3">
                <h1 className="relative flex flex-col pl-3">
                  <a className="relative flex flex-col">
                    <div>
                      <FaTwitter color="#fff" size={24} />
                    </div>
                  </a>
                </h1>
              </div>
              <div>
                <nav>
                  <MenuItem
                    name="Home"
                    icon={<TiHome color={getIconColor('home')} size={24} />}
                    isActive={selectedMenu === 'home'}
                    onClick={() => setSelectedMenu('home')}
                  />
                  <MenuItem
                    name="Explore"
                    icon={
                      <FaHashtag
                        color={getIconColor('explore')}
                        size={24}
                      />
                    }
                    isActive={selectedMenu === 'explore'}
                    onClick={() => setSelectedMenu('explore')}
                  />
                  <MenuItem
                    name="Notification"
                    icon={
                      <FaRegBell
                        color={getIconColor('notifications')}
                        size={24}
                      />
                    }
                    isActive={selectedMenu === 'notifications'}
                    onClick={() => setSelectedMenu('notifications')}
                  />
                  <MenuItem
                    name="Messages"
                    icon={
                      <FaRegEnvelope
                        color={getIconColor('messages')}
                        size={24}
                      />
                    }
                    isActive={selectedMenu === 'messages'}
                    onClick={() => setSelectedMenu('messages')}
                  />
                  <MenuItem
                    name="Bookmarks"
                    icon={
                      <FaRegBookmark
                        color={getIconColor('bookmarks')}
                        size={24}
                      />
                    }
                    isActive={selectedMenu === 'bookmarks'}
                    onClick={() => setSelectedMenu('bookmarks')}
                  />
                  <MenuItem
                    name="Lists"
                    icon={
                      <FaRegListAlt color={getIconColor('lists')} size={24} />
                    }
                    isActive={selectedMenu === 'lists'}
                    onClick={() => setSelectedMenu('lists')}
                  />
                  <MenuItem
                    name="Profile"
                    icon={
                      <FaRegCircle color={getIconColor('profile')} size={24} />
                    }
                    isActive={selectedMenu === 'profile'}
                    onClick={() => setSelectedMenu('profile')}
                  />
                </nav>
              </div>
              <div className="my-3 relative" style={{ width: '100%' }}>
                <a
                  style={{ minHeight: 49 }}
                  href="#"
                  className="bg-blue-500 px-5 flex flex-col relative rounded-full"
                >
                  <div className="flex flex-row flex-grow items-center justify-center text-center">
                    <span className="text-sm font-black">Tweet</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface MenuItemProps {
  name: string;
  icon?: JSX.Element;
  isActive?: boolean;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <a href="#" className="flex flex-col items-start" onClick={props.onClick}>
      <div className="flex flex-row items-center p-3">
        <div>{props.icon}</div>
        <div
          className="ml-5 mr-4 text-xl font-black capitalize text-sm"
          style={{ color: props.isActive ? 'rgba(29,161,242, 1)' : '#fff' }}
        >
          {props.name}
        </div>
      </div>
    </a>
  );
};

export default SideMenu;
