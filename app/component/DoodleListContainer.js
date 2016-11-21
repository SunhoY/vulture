import React, { Component, PropTypes } from 'react';
import { StyleSheet, ListView, View, Text } from 'react-native';
import DoodleList from './DoodleList';
import { connect } from 'react-redux';

class DoodleListContainer extends Component {
    componentDidMount() {
        const {onMount} = this.props;
        onMount();
    }

    render() {
        const {doodleList} = this.props.doodle;
        const doodleDataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }).cloneWithRows(doodleList.reverse());
        return (
            <View>
                <DoodleList doodles={doodleDataSource} />
            </View>
        );
    }
}

const propTypes = {
    onMount: PropTypes.func
};

DoodleListContainer.propTypes = propTypes;

function select({routes, doodle}){
    return {routes, doodle};
}

export default connect(select)(DoodleListContainer);