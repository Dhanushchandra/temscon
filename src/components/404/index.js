import "./404.css"

const NotFound = () => {
    return (
        <div className="error-container">
		<h1>Oops! Page not found</h1>
		<p>The page you are looking for might have been removed or is temporarily unavailable. Please try again later.</p>
		<a href="/" className="404btn">Go to Home</a>
	</div>
    )
}

export default NotFound