import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DoodleListContainer from './DoodleListContainer';
import {fetchDoodleList} from '../actions/doodle';
import {connect} from 'react-redux';
import moment from 'moment';

class DoodleTabs extends Component {
    render() {
        const end = moment().valueOf();
        const archiveStart = moment().subtract(7, 'days').valueOf();
        const todayStart = moment().subtract(1, 'days').valueOf();
        const {dispatch} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.actionBar}>Doodle Now</Text>
                <ScrollableTabView tabBarUnderlineStyle={styles.tabBarUnderlineStyle} tabBarTextStyle={styles.tabBarTextStyle}>
                    <DoodleListContainer tabLabel="Today" onMount={() => dispatch(fetchDoodleList({start: todayStart, end: end}))} ></DoodleListContainer>
                    <DoodleListContainer tabLabel="Archive" onMount={() => dispatch(fetchDoodleList({start: archiveStart, end: end}))} ></DoodleListContainer>
                </ScrollableTabView>
                <Image source={require("../../images/create_doodle.png")} style={styles.floatingButton}></Image>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    actionBar: {
        height: 56,
        paddingLeft: 15,
        paddingTop: 18,
        color: "#5bc0be",
        fontSize: 20
    },
    tabBarUnderlineStyle: {
        backgroundColor: "#5bc0be"
    },
    tabBarTextStyle: {
        fontSize: 15,
        color: "#93a8ac"
    },
    floatingButton: {
        position: "absolute",
        bottom: 35,
        right: 35,
        width: 56,
        height: 56
    }
};

export default connect()(DoodleTabs);