import {useEffect, useState} from "react";
import Whiskey from "./Whiskey";
import Liqueur from "./Liqueur";
import Rum from "./Rum";

function Alcohol(){

    const [isCate , setIsCate] = useState( 'whiskey' )

    const [isState , setState] = useState({
        whiskey : true,
        liqueur : false,
        rum : false
    })

    const handleChangeCate = (e) => {
        setIsCate(e.target.className)
        setState({
            whiskey : false,
            liqueur : false,
            rum : false
        })

        if(e.target.className === 'whiskey') setState({...isState, whiskey:true})
        else if(e.target.className === 'liqueur') setState({...isState, liqueur:true})
        else if(e.target.className === 'rum') setState({...isState, rum:true})
    }

    useEffect(()=>{
        const itemList = document.querySelector('div.listSlider');
        document.querySelectorAll('ul.alcoholMenu li').forEach((items)=>{
            items.style.opacity = '0.5'
            if(items.className === isCate) items.style.opacity = '1'

            if(isCate === 'whiskey'){
                itemList.style.left = '0vw'
            }else if (isCate === 'liqueur'){
                itemList.style.left = '-100vw'
            }else if(isCate === 'rum'){
                itemList.style.left = '-200vw'
            }

        })
    },[isCate])

    return(
        <div className={'alcoholWrap'}>
            <div className={'topImage'}/>

            <ul className={'alcoholMenu'}>
                <li className={'whiskey'} onClick={handleChangeCate}> Whiskey </li>
                <li className={'liqueur'} onClick={handleChangeCate}> Liqueur </li>
                <li className={'rum'} onClick={handleChangeCate}> Rum </li>
            </ul>

            <ul className={'alcoholList'}>
                <div className={'listSlider'}>
                    <li>{ isState.whiskey &&  <Whiskey/> }</li>
                    <li>{ isState.liqueur &&  <Liqueur/> }</li>
                    <li>{ isState.rum &&  <Rum/> }</li>
                </div>
            </ul>
        </div>
    )
}

export default Alcohol
