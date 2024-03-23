import { Link } from "react-router-dom";
import ErrorPageStyles from "../assets/styles/ErrorStyles"

const ErrorPage = () => {
  return (
		<ErrorPageStyles>
			<div>
				<h1>404</h1>
				<h3>Sorry, the page you tried cannot be found!</h3>
				<Link to='/' className='btn'>
					Back to home
				</Link>
			</div>
		</ErrorPageStyles>
	);
}

export default ErrorPage