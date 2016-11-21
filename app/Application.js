import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';

import SplashView from './component/SplashView';
import DoodleTabs from './component/DoodleTabs';
import DoodleView from './component/DoodleView';

const store = createStore(reducers, applyMiddleware(thunk));

function routeScene(actions, sceneKey) {
    return () => actions[sceneKey]();
}

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="splashView" component={SplashView} title="Splash View" initial={true} hideNavBar={true} onAnimationEnd={routeScene(Actions, "doodleTabs")}/>
                        <Scene key="doodleTabs" component={DoodleTabs} title="Doodle Now" />
                        <Scene key="doodleView" component={DoodleView} />
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}