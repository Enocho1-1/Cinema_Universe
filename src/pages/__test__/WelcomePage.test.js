import { render } from "@testing-library/react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import { InitialHeader, InitialSecondHead,WelcomeForm } from "../Initial/components";
import { initialSubmit } from "../../utility/AuthDetail";
import { act } from "react-dom/test-utils";


describe("Renders WelcomePage Components", () => {

    test("Renders the initial header component correctly", () => {
        const { getByTestId } = render(
        <BrowserRouter>
         <InitialHeader/>
        </BrowserRouter>
        )

        const languageBtn = getByTestId("language-button")
        const signinBtn = getByTestId("signin-button")

        expect(languageBtn).toBeInstanceOf(HTMLButtonElement)
        expect(signinBtn).toBeInstanceOf(HTMLAnchorElement)
    })

    test("Renders the secondary header component correctly",() => {
        const { getByTestId } = render(
            <BrowserRouter>
             <InitialSecondHead/>
            </BrowserRouter>
            )
    
        const returnHomeBtn = getByTestId("welcomepage-return")
        expect(returnHomeBtn).toBeInstanceOf(HTMLAnchorElement)
    })

    test("Renders the Welcome text & form component correctly",() => {
        const { getByTestId } = render(
            <BrowserRouter>
             <WelcomeForm/>
            </BrowserRouter>
            )

        const userInput = getByTestId("newuser-input")
        const getStartedBtn = getByTestId("get-started")
        
        act(() => {
            userEvent.click(getStartedBtn,initialSubmit)
            userEvent.type(userInput)
        })
      
        // expect(userInput).toBeInstanceOf(HTMLInputElement)
    })
})