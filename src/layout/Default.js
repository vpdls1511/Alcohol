import React from 'react'
import TopMenu from "../components/TopMenu";
export default function DefaultLayout ({children}) {
    return(
        <div className={'wrap'}>
            <Loading />
            <TopMenu />
            <div>
                {children}
            </div>
        </div>
    )
}

function Loading() {
    return(
        <div className={'loading'}>
            <div className={'yellowBox'}>
                <div className={'boxOverlay'} />
                <p> Let's Shake! </p>
            </div>
        </div>
    )

}
