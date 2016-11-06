import React, {Component} from 'react';
import {Text, Image, StyleSheet} from 'react-native';

export default class DoodleRowItem extends Component {
    render() {
        var item = this.props.item;
        console.log(item);

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

const styles = StyleSheet.create({
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