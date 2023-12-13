import { render} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"
import { InitialHeader, InitialSecondHead,WelcomeForm } from "../Initial/components";

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

        expect(userInput).toBeInstanceOf(HTMLInputElement)
        expect(getStartedBtn).toBeInstanceOf(HTMLButtonElement)

    })
})