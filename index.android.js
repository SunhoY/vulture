import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
    AppRegistry,
} from 'react-native';

import SplashView from './app/SplashView.android';
import DoodlePagerView from './app/DoodlePagerView.android';
import DoodleListContainer from './app/DoodleListContainer.android';

export default class Vulture extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    {/*<Scene key="splashView" component={SplashView} title="Splash View" initial={true} hideNavBar={true} animation="fade" duration={1000} />*/}
                    {/*<Scene key="doodlePagerView" component={DoodlePagerView} title="Doodle Now" hideNavBar={true} />*/}
                    <Scene key="doodleListContainer" component={DoodleListContainer} title="Doodle Now" hideNavBar={true} />
                </Scene>
            </Router>
        );
    }
}

AppRegistry.registerComponent('vulture', () => Vulture);
