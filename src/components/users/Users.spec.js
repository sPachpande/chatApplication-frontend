import React from "react";
import {shallow} from "enzyme";
import {render } from "@testing-library/react";
import Users from "./Users";
import { when } from "jest-when";
import useUsers from './hooks/useUsers';


jest.mock("./hooks/useUsers", () => ({
    __esModule: true,
    default: jest.fn()
}));

describe.skip('Basic rendering', function () {

    beforeEach(()=>{
        
        when(useUsers).calledWith().mockReturnValue({  
            users: [
                {
                    id: 1,
                    username: "test1"
                }, {
                    id: 2,
                    username: "test2"
                }
            ]
        });
    });

    it("Should render correctly", () => {
        
        const UsersComponent = shallow(<Users/>);
        
        expect(UsersComponent).not.toBeNull();
    })

    it("Should display the users list", () => {
        const shows = render(<Users/>);

        shows.getByText("test1");
        shows.getByText("test2");

    });
});