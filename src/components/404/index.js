import "./404.css"

const NotFound = () => {
    return (
        <div className="error-container">
		<h1>Page under construction.</h1>
		<p>The page you are looking for is temporarily unavailable. Please try again later.</p>
		<a href="/" className="404btn">Go to Home</a>
	</div>
    )
}

export default NotFound