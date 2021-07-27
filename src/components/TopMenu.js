import {NavLink} from "react-router-dom";
import {routers} from "../router/RootRouter";

function TopMenu() {

    return(
        <nav className={'topMenu'}>
            <div className={'textLogo'}>
                <p>Alcohol</p>
                <p>Shake</p>
            </div>
            <div className={'menuItems'}>
                {routers.map( (item, key)=>{
                    return(
                        <NavLink to={item.path}> {item.name} </NavLink>
                    )
                } )}
            </div>
        </nav>
    )

}

export default TopMenu
