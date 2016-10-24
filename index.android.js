import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import SplashView from './app/SplashView.android';

export default class Vulture extends Component {
    render() {
        return (
            <SplashView/>
        );
    }
}

AppRegistry.registerComponent('vulture', () => Vulture);
