import React from "react";
import {render } from "@testing-library/react";
import ReceiverProfile from './ReceiverProfile';


describe('Basic rendering', function () {

    const receiver = 2;
    const receiverName = "test1";
    it("Should render correctly", () => {
        
        const ReceiverProfileComponent = render(<ReceiverProfile receiver={receiver} receiverName={receiverName}/>);

        expect(ReceiverProfileComponent).not.toBeNull();
        ReceiverProfileComponent.getByText("test1");
    })

});