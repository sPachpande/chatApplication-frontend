import React from "react";
import {shallow} from "enzyme";
import Layout from "./Layout";

describe('Basic rendering', function () {
    it("Should render correctly", () => {
        
        const layoutComponent = shallow(<Layout/>);
        
        expect(layoutComponent.type('div')).toBe("div");
    })
});