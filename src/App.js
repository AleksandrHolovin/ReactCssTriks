import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
//icons
import { ReactComponent as BackArrowBtn } from "./assets/icon3.svg";
import { ReactComponent as AnotherBackArrowBtn } from "./assets/icon2.svg";
import { ReactComponent as Dollar } from "./assets/dollar.svg";
import { ReactComponent as InstIcon } from "./assets/icon1.svg";
import { ReactComponent as Message } from "./assets/ivon4.svg";
import { ReactComponent as Titter } from "./assets/twitter.svg";


const Navbar = ({
    children
}) => {
    return (
        <nav className="navbar" >
            <ul className="navbar-nav" > {children} </ul>
        </nav >
    )
}

const NavbarItem = ({
    icon,
    children
}) => {

    const [open, setOpen] = useState(false)

    return (
        <li className="nav-item">
            <a

                className="icon-button"
                onClick={() => setOpen(!open)}
            >
                {icon}
            </a>
            {open && children}
        </li >
    )
}

const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState("main")
    const [menuHeight, setMenuHeight] = useState(null)

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height)
    }

    const DropDownItem = ({
        leftIcon,
        children,
        rightIcon,
        goToMenu
    }) => {
        return (
            <a href="#" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
                <span className="icon-button">{leftIcon}</span>
                {children}
                <span className="icon-right">{rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropDownItem
                        leftIcon={<BackArrowBtn />}
                    >
                        <span className="item-title-margin">My Profile</span>

                    </DropDownItem>
                    <DropDownItem
                        rightIcon={<Dollar />}
                        leftIcon={<Titter />}
                        goToMenu="settings"
                    >
                        <span className="item-title-margin">Settings</span>

                    </DropDownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropDownItem
                        leftIcon={<BackArrowBtn />}
                    >
                        <span className="item-title-margin">My Profile</span>

                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<BackArrowBtn />}
                    >
                        <span className="item-title-margin">My Profile</span>

                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<BackArrowBtn />}
                    >
                        <span className="item-title-margin">My Profile</span>

                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<BackArrowBtn />}
                    >
                        <span className="item-title-margin">My Profile</span>

                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<BackArrowBtn />}
                    >
                        <span className="item-title-margin">My Profile</span>

                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<BackArrowBtn />}
                    >
                        <span className="item-title-margin">My Profile</span>

                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<BackArrowBtn />}
                    >
                        <span className="item-title-margin">My Profile</span>

                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<Dollar />}
                        rightIcon={<Titter />}
                        goToMenu="main"
                    >
                        <span className="item-title-margin">Go Back</span>

                    </DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

function App() {
    return (
        <Navbar>
            <NavbarItem icon={<BackArrowBtn />} />
            <NavbarItem icon={<AnotherBackArrowBtn />} />
            <NavbarItem icon={<Message />} />
            <NavbarItem icon={<InstIcon />}>
                <DropdownMenu />
            </NavbarItem>
        </Navbar>
    );
}

export default App;