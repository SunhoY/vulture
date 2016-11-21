import React, {Component, PropTypes} from 'react';
import {Text, Image, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class DoodleRowItem extends Component {
    render() {
        const {item} = this.props;

        return (
            <TouchableWithoutFeedback onPress={() => {Actions.doodleView({url: item.url})}}>
                <View style={styles.rowContainer}>
                    <Text style={styles.timeElapsed}>{item.timeElapsed}</Text>
                    <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                    <Image style={styles.doodleImage}
                           source={item.imageUrl}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

DoodleRowItem.PropTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string,
        imageUrl: PropTypes.object.isRequired,
        timeElapsed: PropTypes.string.isRequired
    })
};

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