'use strict';

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {ListView} from 'react-native';
import DoodleList from '../../app/DoodleList.android';

it("renders correctly", () => {
    var dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    });

    var doodles = [];
    for (let i = 0; i < 3; ++i) {
        doodles.push({
            title: "title" + i,
            content: "content" + i,
            elapsedTime: "elapsedTime" + i,
            imageUrl: "http://image.url" + i
        })
    }

    dataSource.cloneWithRows(doodles);

    const tree = renderer.create(
        <DoodleList doodles={dataSource}/>
    );

    expect(tree).toMatchSnapshot();
});