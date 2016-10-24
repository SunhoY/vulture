import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, NavigatorExperimental } from 'react-native';

export default class SplashView extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            navigationState: {
                index: 0,
                routes: [{key: "Splash Scene"}]
            },
        };

        this._onNavigationChange = this._onNavigationChange.bind(this);
    }

    _onNavigationChange(type) {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Doodle Now</Text>
                <Text style={styles.secondaryTitle}>for Stand Up</Text>
                <Image style={styles.mainImage} source={require('../images/act_logo.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: "center",
        alignSelf: "stretch"
    },
    title: {
        alignSelf: 'center',
        textAlign: "center",
        fontSize: 30,
        opacity: .6,
        marginTop: 142
    },
    secondaryTitle: {
        opacity: .5,
        fontSize: 20,
        marginTop: 5
    },
    mainImage: {
        marginTop: 61,
        width: 143,
        height: 143,
    },
});