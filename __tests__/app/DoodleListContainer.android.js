'use strict';

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

describe("DoodleListContainer Test", ()=>{
    let tree,
        instance;

    let mockReference,
        mockGetReference;

    beforeEach(() => {
        mockReference = {
            limitToLast: jest.fn(() => {
                return mockReference;
            }),
            on: jest.fn(() => {
                return mockReference;
            })
        };

        mockGetReference = jest.fn(() => {
            return mockReference;
        });

        jest.mock('../../app/firebase/FirebaseDatabase.android', () => {
            return {
                getReference: mockGetReference
            };
        });

        const DoodleListContainer = require('../../app/DoodleListContainer.android').default;
        tree = renderer.create(
            <DoodleListContainer />
        );

        instance = tree.getInstance();
    });

    it("gets reference 'doodles' from FirebaseDatabase", () => {
        expect(mockGetReference).toHaveBeenCalledWith("doodles");
    });

    it("queries last 10 doodles from doodle reference", () => {
        expect(mockReference.limitToLast).toHaveBeenCalledWith(10);
    });

    it("sets value listener on doodle reference", () => {
        var onArguments = mockReference.on.mock.calls[0];
        expect(onArguments[0]).toBe("value");
    });

    it("renders correctly", () => {
        expect(tree).toMatchSnapshot();
    });

    describe("Value listener", () => {
        let valueListener;
        let fakeSnapshot;

        beforeEach(()=> {
            fakeSnapshot = [
                createFakeDoodle("content1", "title1", "imageUrl1", "url1", 11111),
                createFakeDoodle("content2", "title2", undefined, "url2", 22222)
            ];

            valueListener = mockReference.on.mock.calls[0][1];
            valueListener(fakeSnapshot);
        });

        it("changes state with data from firebase", () => {
            expect(instance.state.dataSource.getRowData(0, 0))
                .toEqual({
                    title: "title1",
                    content: "content1",
                    imageUrl: {uri: "imageUrl1"},
                    url: "url1",
                    createdAt: 11111
                });

            expect(instance.state.dataSource.getRowData(0, 1))
                .toEqual({
                    title: "title2",
                    content: "content2",
                    imageUrl: require("../images/act_logo.png"),
                    url: "url2",
                    createdAt: 22222
                });
        });
    });
});

function createFakeDoodle(content, title, imageUrl, url, createdAt) {
    return {
        val: () => {
            return {
                content: content,
                title: title,
                imageUrl: imageUrl,
                url: url,
                createdAt: createdAt
            };
        }
    }
}