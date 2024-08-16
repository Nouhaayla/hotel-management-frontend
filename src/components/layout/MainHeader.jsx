import React from "react"

const MainHeader = () => {
	return (
		<header className="header-banner">
			<div className="overlay"></div>
			<div className="animated-texts overlay-content">
				<h1>
					Welcome to <span className="hotel-color"> NOVA-Hotel</span>
				</h1>
				<h4>Your gateway to unforgettable experiences !</h4>
				<div className="stars">
          {[...Array(5)].map((star, index) => (
            <span key={index} className="star">★</span>
          ))}
        </div>
			</div>
		</header>
	)
}

export default MainHeader