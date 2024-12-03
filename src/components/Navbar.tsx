import { Link } from "react-router-dom"
import { MyProjects } from "../pages/MyProjects"

export const Navbar = () => {
  return (
    <nav className="w-full">
        <ol className="w-full flex justify-around">
            <li>
                <Link to="/home">
                Home
                </Link>
            </li>
            <li>
            <Link to = "/projects">
                My Projects
            </Link>
            </li>
        </ol>
    </nav>
  )
}

