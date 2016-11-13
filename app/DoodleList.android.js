import React, {Component} from 'react';
import {ListView} from 'react-native';
import DoodleRowItem from './DoodleRowItem.android';

export default class DoodleList extends Component {
    constructor(props) {
        super(props);

        this._renderItem = this._renderItem.bind(this);
    }

    render() {
        return (
            <ListView dataSource={this.props.doodles}
                      renderRow={this._renderItem} />
        );
    }

    _renderItem(item) {
        return (
            <DoodleRowItem item={item} />
        );
    }
}