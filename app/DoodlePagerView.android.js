import React, {Component} from 'react';
import {View, Text, ViewPagerAndroid, StyleSheet} from 'react-native';
import DoodleList from './DoodleList.android';

export default class DoodlePagerView extends Component {
    render() {
        return (
            <ViewPagerAndroid initialPage={0} style={styles.container}>
                <View>
                    <DoodleList page="1" />
                </View>
                <View>
                    <DoodleList page="2"/>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
