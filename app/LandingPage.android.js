import React, {Component} from 'react';
import {View} from 'react-native';
import {TabLayoutAndroid, TabAndroid} from 'react-native-android-kit'

export default class LandingPage extends Component {
    render() {
        return (
            <View>
                <TabLayoutAndroid style={{height: 60}}>
                    <TabAndroid text="Today" textSize={15} indicatorTabHeight={2} >
                        
                    </TabAndroid>
                    <TabAndroid text="Archive" textSize={15} indicatorTabHeight={2} >

                    </TabAndroid>
                </TabLayoutAndroid>
            </View>
        );
    }
}

