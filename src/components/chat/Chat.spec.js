import React from "react";
import {shallow} from "enzyme";
import Chat from "./Chat";

describe('Basic rendering', function () {
    it("Should render correctly", () => {
        
        const ChatComponent = shallow(<Chat/>);
        
        expect(ChatComponent).not.toBeNull();
    })
});