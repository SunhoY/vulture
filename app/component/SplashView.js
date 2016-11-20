import React, { Component, PropTypes } from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import { View, Text, Image, StyleSheet, NavigatorExperimental, Animated } from 'react-native';

class SplashView extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            fadeAnimation: new Animated.Value(1)
        };

        const {onAnimationEnd} = this.props;

        this.state.fadeAnimation.addListener(({value}) => {
            if(value === 0) {
                onAnimationEnd();
            }
        });
    }

    render() {
        console.log(this.props);
        return (
            <Animated.View style={[styles.container, {opacity: this.state.fadeAnimation}]}>
                <Text style={styles.title}>Doodle Now</Text>
                <Text style={styles.secondaryTitle}>for Stand Up</Text>
                <Image style={styles.mainImage} source={require('../../images/act_logo.png')} />
            </Animated.View>
        );
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnimation,
            {toValue: 0, duration: 1000, delay: 1000}
        ).start();
    }
}

const propTypes = {
    routes: PropTypes.object,
    onAnimationEnd: PropTypes.func,
};

SplashView.PropTypes = propTypes;

function select({routes}) {
    return {routes};
}

export default connect(select)(SplashView);

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