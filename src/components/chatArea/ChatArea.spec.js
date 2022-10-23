import React from "react";
import {shallow} from "enzyme";
import {render } from "@testing-library/react";
import ChatArea from './ChatArea';


describe('Basic rendering', function () {

    const messages= [
        {
            "id": 1,
            "sender": {
                "id": 1,
                "username": "test1",
                "password": "test1"
            },
            "receiver": {
                "id": 3,
                "username": "test3",
                "password": "test3"
            },
            "data": "message1"
        },
        {
            "id": 2,
            "sender": {
                "id": 1,
                "username": "test1",
                "password": "test1"
            },
            "receiver": {
                "id": 3,
                "username": "test3",
                "password": "test3"
            },
            "data": "message2"
        }
    ]

    it("Should render correctly", () => {
        
        const ChatAreaComponent = shallow(<ChatArea messages={messages}/>);

        expect(ChatAreaComponent).not.toBeNull();
    })

    it("Should display the users list", () => {
        const shows = render(<ChatArea messages={messages}/>);

        shows.getByText("message1");
        shows.getByText("message2");

    });
});