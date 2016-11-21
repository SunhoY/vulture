import React, {Component} from 'react';
import {WebView} from 'react-native';


class DoodleView extends Component {
    render() {

        console.log(this.prop);

        return (
            <WebView
                source={{uri: this.props.url}}
            />
        );
    }
}

export default DoodleView;