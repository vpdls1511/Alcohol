import {useEffect, useState} from "react";

function MainText(){
    //animation: breath 3s 0s infinite linear alternate;

    const [ isCnt , setCnt ] = useState(0)
    const loopAnimation = () => {
        const items = document.querySelectorAll('.mainText p')
        if(isCnt === 2){
            setCnt(0)
        }else{
            setCnt(isCnt+1)
        }
        document.querySelectorAll('.mainText p').forEach((item) => item.style.opacity = '0.4')
        items[isCnt].style.opacity = '1'
    }


    useEffect(()=>{
        let interval = setInterval(loopAnimation, 1000)
        return () => clearInterval(interval)
    })

    return(
        <div className={'mainTextBox'}>
            <div className={'imgFilter'} />
            <div className={'mainText'}>
                <p>Whiskey</p>
                <p>Liqueur</p>
                <p>Rum</p>
            </div>
        </div>
    )
}

export default MainText
