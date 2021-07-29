import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './assets/index.scss'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {routers} from './router/RootRouter'

function App() {

    return (
        <Router basename={'/Alcohol'}>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={500}
                        classNames="pageSlider"
                        mountOnEnter={true}
                        unmountOnExit={true}>
                        <Switch location={location}>
                            {routers.map((item , key) => {
                                return(
                                    <RouteWithLayout key={key} exact={item.exact} path={item.path} component={item.component} layout={item.layout}/>
                                )
                            })}
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>

        </Router>
    );
}

function RouteWithLayout({layout, component, ...rest}){
    return (
        <Route {...rest} render={(props) =>
            React.createElement( layout, props, React.createElement(component, props))
        }/>
    );
}

export default App;
