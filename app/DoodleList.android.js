import React, {Component} from 'react';
import {ListView, StyleSheet, View, Text, Image} from 'react-native';
import DoodleRowItem from './DoodleList.android';
import * as firebase from 'firebase';

export default class DoodleList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
        };

        this._renderItem = this._renderItem.bind(this);
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this._renderItem} />
        );
    }

    componentDidMount() {
        var doodleReference = firebaseApp.database().ref("doodles");
        console.log(doodleReference);
        doodleReference.limitToLast(10).on("value", (snapShot) => {
            var doodles = [];
            snapShot.forEach((child) => {
                console.log(child.val());
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

    _renderItem(item) {
        return (
            <View style={styles.rowContainer}>
                <Text style={styles.timeElapsed}>{item.createdAt}</Text>
                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
                <Image style={styles.doodleImage}
                       source={item.imageUrl}
                />
            </View>
        );
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyA9R6guoRtE43HN42q3BqB8VnbRmuFZI0o",
    authDomain: "doodle-now.firebaseapp.com",
    databaseURL: "https://doodle-now.firebaseio.com",
    storageBucket: "doodle-now.appspot.com",
    messagingSenderId: "220022746007"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch"
    },
    doodleRow: {
        height: 192
    },
    rowContainer: {
        paddingTop: 14,
        paddingBottom: 16,
        paddingLeft: 17,
        paddingRight: 17,
        height: 192
    },
    timeElapsed: {
        marginTop: 14,
        fontSize: 14,
        color: "#999999"
    },
    title: {
        fontSize: 16,
        marginTop: 14,
        color: "#555555",
        fontWeight: "bold"
    },
    content: {
        fontSize: 14,
        marginTop: 8,
        width: 200,
        height: 100,
        color: "#555555"
    },
    doodleImage: {
        width: 104,
        height: 104,
        position: 'absolute',
        top: 90,
        left: 232
    }
});