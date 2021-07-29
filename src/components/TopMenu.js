import {NavLink} from "react-router-dom";
import {routers} from "../router/RootRouter";
import {useEffect, useRef, useState} from "react";

function TopMenu() {
    const [isMenu , setMenu] = useState(false)
    const menuRef = useRef(null)
    const btnRef = useRef(null)


    function handleResize() {
        if(window.innerWidth > 800){
            setMenu(false)
        }
    }

    function handleShowMobileMenu(){
        setMenu(!isMenu)
    }

    useEffect(()=>{
        if(isMenu){
            menuRef.current.style.right = '0'
            menuRef.current.style.opacity = '1'
            btnRef.current.childNodes[0].style.transform = 'rotate(-400deg) translateY(11px) translateX(-9px)'
            btnRef.current.childNodes[1].style.transform = 'translateX(50px)'
            btnRef.current.childNodes[2].style.transform = 'rotate(400deg) translateY(-8px) translateX(-6px)'

        }else{
            menuRef.current.style.right = '-100vw'
            menuRef.current.style.opacity = '0'
            btnRef.current.childNodes[0].style.transform = 'rotate(0deg) translateY(0) translateX(0)'
            btnRef.current.childNodes[1].style.transform = 'translateX(0px)'
            btnRef.current.childNodes[2].style.transform = 'rotate(0deg) translateY(0) translateX(0)'
        }
        menuRef.current.style.opacity = '1'
    },[isMenu])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { // cleanup
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return(
        <nav className={'topMenu'}>
            <NavLink className={'textLogo'} to={'/'}>
                <p>Alcohol</p>
                <p>Shake</p>
            </NavLink>
            <div className={'menuBtn'} onClick={handleShowMobileMenu} ref={btnRef} >
                <div/>
                <div/>
                <div/>
            </div>
            <div className={'menuItems'} ref={menuRef}>
                {routers.map( (item, key)=>{
                    return(
                        <NavLink key={key} exact={item.exact} to={item.path}> {item.name} </NavLink>
                    )
                } )}
            </div>
        </nav>
    )

}

export default TopMenu
