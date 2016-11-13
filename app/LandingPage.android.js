import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TabViewAnimated, TabBarTop} from 'react-native-tab-view';

export default class LandingPage extends Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'First' },
            { key: '2', title: 'Second' },
        ],
    };

    _handleChangeTab = (index) => {
        this.setState({ index });
    };

    _renderHeader = (props) => {
        return <TabBarTop {...props} />;
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <View style={{ backgroundColor: '#ff4081' }} />;
            case '2':
                return <View style={{ backgroundColor: '#673ab7' }} />;
            default:
                return null;
        }
    };

    render() {
        return (
            <TabViewAnimated
                style={{flex: 1}}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        );
    }
}

