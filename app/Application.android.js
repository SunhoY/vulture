import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {connect, Provider} from 'react-redux';

import {createStore} from 'redux';
import reducers from './reducer';

import SplashView from './SplashView.android';
import DoodlePagerView from './DoodlePagerView.android';
import DoodleListContainer from './DoodleListContainer.android';

const RouterWithRedux = connect()(Router);
const store = createStore(reducers);

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        {/*<Scene key="splashView" component={SplashView} title="Splash View" initial={true} hideNavBar={true} animation="fade" duration={1000} />*/}
                        {/*<Scene key="doodlePagerView" component={DoodlePagerView} title="Doodle Now" hideNavBar={true} />*/}
                        <Scene key="doodleListContainer" component={DoodleListContainer} title="Doodle Now" hideNavBar={true} />
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}