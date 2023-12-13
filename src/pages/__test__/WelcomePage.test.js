import { render} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"
import { InitialHeader,WelcomeForm } from "../Initial/components";

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

})