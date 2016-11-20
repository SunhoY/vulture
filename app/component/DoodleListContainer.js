import React, { Component } from 'react';
import { StyleSheet, ListView, View, Text } from 'react-native';
import DoodleList from './DoodleList';
import FirebaseDatabase from '../firebase/FirebaseDatabase';
import { connect } from 'react-redux';

class DoodleListContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
        };
    }

    componentDidMount() {
        console.log(this.props);
        const {start, end, dispatch} = this.props;
        dispatch({type: "temp"});

        var doodleReference = FirebaseDatabase.getReference("doodles");
        doodleReference.orderByChild("createdAt").startAt(start).endAt(end).on("value", (snapShot) => {
            var doodles = [];
            snapShot.forEach((child) => {
                var doodle = child.val();
                doodles.push({
                    content: doodle.content,
                    createdAt: doodle.createdAt,
                    imageUrl: doodle.imageUrl || doodle.imageUrl === "" ? {uri: doodle.imageUrl} : require("../../images/act_logo.png"),
                    title: doodle.title,
                    url: doodle.url || null
                })
            });

            console.log(doodles);

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(doodles.reverse())
            })
        });
    }

    render() {
        console.log(this.props);
        return (
            <View>
                <DoodleList doodles={this.state.dataSource} />
            </View>
        );
    }
}

function select({routes, someReducer}){
    return {routes, someReducer};
}

export default connect(select)(DoodleListContainer);