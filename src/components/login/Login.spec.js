import React from "react";
import {shallow} from "enzyme";
import Login from "./Login";
import { render} from "@testing-library/react";
import '@testing-library/jest-dom';

describe('Basic rendering', function () {
    it("Should render correctly", () => {
        
        const loginComponent = shallow(<Login/>);
        
        expect(loginComponent).not.toBeNull();
    })
    it("should render username field",() =>{
        const {getByTestId} = render(<Login/>);

        const usernameField = getByTestId('password-input');

        expect(usernameField).toBeInTheDocument;
    });
    it("should render password field",() =>{
        const {getByTestId} = render(<Login/>);

        const passwordField = getByTestId('password-input');

        expect(passwordField).toBeInTheDocument;
    });
    it("should render login button",() =>{
        const {getByTestId} = render(<Login/>);

        const loginButton = getByTestId('login-button');

        expect(loginButton).toBeInTheDocument;
    });
    it("should render chat icon",() =>{
        const {getByTestId} = render(<Login/>);

        const chatIcon = getByTestId('chat-icon');

        expect(chatIcon).toBeInTheDocument;
    });
});