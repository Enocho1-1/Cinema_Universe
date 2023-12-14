import { render,screen } from "@testing-library/react";
import { WelcomeForm } from "../../Initial/components";
import { BrowserRouter } from "react-router-dom";

describe("Test Welcome Form Components", () => {
    
    test("Render Welcome Form elements Correctly", () => {
        render(<WelcomeForm/>, {wrapper: BrowserRouter})

        const heading = screen.getByTestId("heading")
        const subHeadOne = screen.getByTestId("sub-heading-one")
        const subHeadTwo = screen.getByTestId("sub-heading-two")
        const form = screen.getByTestId("form")
        const userInput = screen.getByTestId("newuser-input")
        const submitBtn = screen.getByTestId("get-started")
        const image = screen.getByAltText("arrow")

        expect(heading.innerHTML).toBe("Unlimited movies, TV shows, and more")
        expect(subHeadOne .innerHTML).toBe("Watch Anywhere. Cancel anytime.")
        expect(subHeadTwo.innerHTML).toBe("Ready to watch? Enter your email to create or restart your membership.")
        expect(form).toBeInstanceOf(HTMLFormElement)
        expect(userInput).toBeInstanceOf(HTMLInputElement)
        expect(submitBtn).toBeInstanceOf(HTMLButtonElement)
        expect(image).toBeTruthy()
    })
})