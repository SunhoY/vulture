import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import DoodleRowItem from '../../app/DoodleRowItem.android';

describe("Rendering", () => {
    let commonItem = {
        title: "Fancy doodle",
        timeElapsed: "1 hours ago",
    };

    it("renders correctly when image is remote", () => {
        const item = Object.assign({}, commonItem, {
            imageUrl: {uri: "http://doodle.com?id=222" }
        });

        const tree = renderer.create(
            <DoodleRowItem item={item}/>
        );

        expect(tree).toMatchSnapshot();
    });

    it("renders correctly when content not provided", () => {
        const item = Object.assign({}, commonItem, {
            imageUrl: require("../../images/act_logo.png")
        });

        const tree = renderer.create(
            <DoodleRowItem item={item}/>
        );

        expect(tree).toMatchSnapshot();
    });
});