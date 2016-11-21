import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Application from './app/Application';

export default class Vulture extends Component {
    render() {
        return (
            <Application />
        );
    }
}

AppRegistry.registerComponent('vulture', () => Vulture);
