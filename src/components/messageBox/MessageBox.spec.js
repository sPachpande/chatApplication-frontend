import React from "react";
import {shallow} from "enzyme";
import {render } from "@testing-library/react";
import MessageBox from './MessageBox';


describe('Basic rendering', function () {

    const receiver = 2;
    it("Should render correctly", () => {
        
        const MessageBoxComponent = shallow(<MessageBox receiver={receiver}/>);

        expect(MessageBoxComponent).not.toBeNull();
    })

});