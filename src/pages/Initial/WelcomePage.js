import { useTitle } from "../../hooks/index"
import { InitialHeader,WelcomeForm } from "./components"


export const WelcomePage = () => {

  useTitle("Cinema Universe | Watch Movies and TV Shows")
  

  return (
    <main data-testid="welcome-container" className="initial min-h-[100vh] w-screen">
        <InitialHeader/>
        <WelcomeForm />
        <div data-testid="overlay-container" id="overlay"></div>
    </main>

    
  )
}
 