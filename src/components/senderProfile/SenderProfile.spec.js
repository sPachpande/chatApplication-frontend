import React from "react";
import {render } from "@testing-library/react";
import SenderProfile from './SenderProfile';


describe('Basic rendering', function () {

    const senderName = "test1";
    it("Should render correctly", () => {
        
        const SenderProfileComponent = render(<SenderProfile senderName={senderName}/>);

        expect(SenderProfileComponent).not.toBeNull();
        SenderProfileComponent.getByText("test1");
    })

});