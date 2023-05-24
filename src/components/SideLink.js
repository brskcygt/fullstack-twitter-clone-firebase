import React from 'react'

const SideLink = ({ name, Icon ,active,onMenuItemClick}) => {
    const isActive = active === name;
    return (
        <li onClick={() => onMenuItemClick(name)}>
            <a href='/#' className='cursor-pointer block text-xl group mb-2'>
                <div className='inline-block'>
                    <div className={`flex items-center justify-start group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
                        ${isActive ? 'text-primary-base' : ''}
                    `}
                    >
                        <Icon className="w-7 h-7" />
                        <span className='ml-4 font-bold '>{name}</span>
                    </div>
                </div>

            </a>
        </li>
    )
}

export default SideLink