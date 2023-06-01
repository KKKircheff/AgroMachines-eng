import React, { useEffect } from 'react';
import { Item } from '../../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'
import { HiOutlinePhone } from 'react-icons/hi';

import './navigation.styles.scss';

import { Outlet } from 'react-router-dom';
interface NavigationProps {
    items: Item[];
}

const Navigation = ({ items }: NavigationProps) => {
    
    const [isToggled, setIsToggled] = useState(false);
    const [closeSubMenu, setCloseSubMenu] = useState(false);
    const [isTransparentNavbar, setIsTransparentNavbar] = useState(false);

    const screenSizes = {
        small: 720
    }

    const toggleSubMenu = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.currentTarget.classList.toggle('toggled');
    }

    const renderItems = () => items.map((item, index) => (
        <li key={index}>
            {item.url
                ? <Link to={item.url} onClick={() => closeMenu(true)}>{item.name}</Link>
                : <span onClick={toggleSubMenu}>
                    {item.name}
                    <FaAngleDown className='submenu-dropdown-icon' />
                </span>
            }
            {item.children && renderChildren(item.children)}
        </li>

    ))

    const renderChildren = (children: Item[]) => (
        <ul className="sub-menu">
            {children.map((child, index) => (
                <li key={index}>
                    <Link to={child.url!} onClick={() => closeMenu(true)}>
                        {child.name}
                    </Link>
                </li>
            ))}
        </ul>
    )

    const closeMenu = (closeSubMenu = false) => {
        setIsToggled(false);
        if (closeSubMenu && window.innerWidth > screenSizes.small) {
             setCloseSubMenu(true)
             setTimeout(() => setCloseSubMenu(false), 0)
        }
    }

    useEffect(() => {
        if (closeSubMenu && window.innerWidth > screenSizes.small) {
            closeMenu(true);
        }
        // eslint-disable-next-line
    }, [closeSubMenu, screenSizes.small]);

    useEffect(() => {
        const addTransparencyToNavbar = () => {
            if (window.scrollY >= 60) {
                setIsTransparentNavbar(true);
            } else {
                setIsTransparentNavbar(false);
            }
        };
        window.addEventListener('scroll', addTransparencyToNavbar);
        return () => {
            window.removeEventListener('scroll', addTransparencyToNavbar);
        };
    }, []);





    // const addTransparencyToNavbar = () => {
    //     if (window.scrollY >= 60) {
    //         setIsTransparentNavbar(true)
    //     } else {
    //         setIsTransparentNavbar(false)
    //     }
    // }

    // window.addEventListener('scroll', addTransparencyToNavbar)

    return (
        <div className='main-wrapper'>
            <div className='under-navigation-layer'></div>
            <nav className={
                isTransparentNavbar
                    ? 'main-navbar active'
                    : 'main-navbar'}
            >
                <div className="container">
                    <div className={['menu-logo-section', isToggled && 'active', closeSubMenu && 'closed'].filter(Boolean).join(' ')}>
                        <h1>agro</h1>
                        <h1>machines</h1>
                    </div>
                    <div className={['phone-number-container', isToggled && 'translate-down', closeSubMenu && 'closed'].filter(Boolean).join(' ')}>
                        <p><span><HiOutlinePhone /></span> +359 876 962484</p>
                    </div>
                    <div
                        className={
                            isToggled
                                ? 'hamburger close'
                                : 'hamburger'
                        }
                        onClick={() => setIsToggled(!isToggled)}
                    >
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                    </div>
                </div>
                <ul
                    className={['menu', isToggled && 'active', closeSubMenu && 'closed'].filter(Boolean).join(' ')}
                >{renderItems()}</ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navigation