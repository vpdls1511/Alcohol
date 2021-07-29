import {useEffect, useRef, useState} from "react";

function CustomAccordion ({ en , kr , base , alcohol, recipe , hash , desc }) {

    const [isAccordion, setAccordion] = useState(false)
    const [isWidth , setWidth] = useState(window.innerWidth)
    const accordionRef = useRef(null)
    const descRef = useRef(null)
    const titleRef = useRef(null)

    const tag = hash.split('#')

    function handleResize() {
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        const accordionHeight = descRef.current.offsetHeight + 90 + 'px'
        if(isAccordion){
            accordionRef.current.style.transform = 'scale(1.03)'
            accordionRef.current.style.height = accordionHeight
            descRef.current.style.top = '10px'
        }else{
            accordionRef.current.style.height = titleRef.current.offsetHeight + 'px'
            accordionRef.current.style.transform = 'scale(1)'
            descRef.current.style.top = '50px'
        }
    }, [isAccordion, isWidth])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { // cleanup
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return(
        <div
            className={'accordionMainBox'}
            onClick={()=> setAccordion(!isAccordion)}
            ref={accordionRef}
        >
            <div className={'title'} ref={titleRef}>
                <p><b>{en}</b>/{kr}</p>
                <p>{
                    tag.map( (hashTag, key) => {
                        return key !== 0 ? ' #'+hashTag : null
                    })
                }</p>
            </div>
            <div className={'c-both'}/>
            <div className={'accordionDesc'} ref={descRef}>
                <div>
                    <div>
                        <p>BASE</p>
                        <p>{base}</p>
                    </div>
                    <div>
                        <p>RECIPE</p>
                        <p>{recipe}</p>
                    </div>
                    <div>
                        <p>ALCOHOL</p>
                        <p>{alcohol}</p>
                    </div>
                </div>
                <div>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomAccordion
