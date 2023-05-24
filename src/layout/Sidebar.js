import React, { useState } from 'react'
import SideLink from '../components/SideLink';
import { UserBox } from '../components/UserBox';
import { ExploreIcon, HomeIcon, MessagesIcon, NotificationIcon, MoreIcon, ProfileIcon, BookMarksIcon, ListsIcon } from '../icons/Icon'
import TwitterLogo from '../images/twitter-icon.svg';

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon
  },
  {
    name: 'Explore',
    icon: ExploreIcon
  },
  {
    name: 'Notifications',
    icon: NotificationIcon
  },
  {
    name: 'Messages',
    icon: MessagesIcon
  },
  {
    name: 'Bookmarks',
    icon: BookMarksIcon
  },
  {
    name: 'Lists',
    icon: ListsIcon
  },
  {
    name: 'Profile',
    icon: ProfileIcon
  },
  {
    name: 'More',
    icon: MoreIcon
  },
]

export const Sidebar = () => {
  const [active,setActive] = useState("Home");

  const handleMenuItemClick = (name) =>{
    setActive(name); 
  }
  return (
    <div className="flex flex-col justify-between w-72 px-2 sticky top-0 h-screen">
      <div>
        <div className='mt-1 mb-4 ml-1 w-10 h-10 flex items-center justify-center hover:bg-gray-lightest transform transition-colors duration-200 rounded-full'>
          <img src={TwitterLogo} alt="Twitter Logo" className='w-9 h-9' />
        </div>

        <nav className='mb-4'>
          <ul>
           {sideLinks.map(({name,icon})=>(
            <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
           ))}
          </ul>
        </nav>
        <button className='bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200'>
          Tweet
        </button>
      </div>
      <div><UserBox/></div>

    </div>
  )
}
