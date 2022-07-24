import React from "react";
import {shallow} from "enzyme";
import Login from "./Login";

describe('Basic rendering', function () {
    it("Should render correctly", () => {
        
        const layoutComponent = shallow(<Login/>);
        
        expect(layoutComponent).not.toBeNull();
    })
});