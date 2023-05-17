import { Link } from "react-router-dom"
import "./App.css"
import logo from "./logo.svg"

const Homepage = () => {
	return (
		<div>
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>Welcome to my WEB-PAGE</p>
          <Link to="/contact"> Contact</Link>
          {/* <NavLink  to="/contact" exact> Contact</NavLink> */}
				</header>
			</div>
		</div>
	)
}

export default Homepage
