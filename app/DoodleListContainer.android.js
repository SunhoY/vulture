import React, {Component} from 'react';
import {StyleSheet, ListView} from 'react-native';
import DoodleList from './DoodleList.android';
import FirebaseDatabase from './firebase/FirebaseDatabase.android';

export default class DoodleListContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
        };
    }

    componentDidMount() {
        var doodleReference = FirebaseDatabase.getReference("doodles");
        doodleReference.limitToLast(10).on("value", (snapShot) => {
            var doodles = [];
            snapShot.forEach((child) => {
                var doodle = child.val();
                doodles.push({
                    content: doodle.content,
                    createdAt: doodle.createdAt,
                    imageUrl: doodle.imageUrl || doodle.imageUrl === "" ? {uri: doodle.imageUrl} : require("../images/act_logo.png"),
                    title: doodle.title,
                    url: doodle.url || null
                })
            });

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(doodles)
            })
        });
    }

    render() {
        return (
            <DoodleList doodles={this.state.dataSource} />
        );
    }
}