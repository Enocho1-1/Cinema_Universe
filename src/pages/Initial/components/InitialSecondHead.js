import { Link } from "react-router-dom"

export const InitialSecondHead = () => {
  return (
    <header className="relative z-10 m-auto max-w-7xl px-2 my-10">
      <span>
        <Link to="/" data-testid="welcomepage-return" >
          <h1 className="font-teko  text-5xl max-md:text-4xl text-primary-blue hover:cursor-pointer">Cinema-U</h1>
        </Link>
    </span>
    </header>
  )
}
