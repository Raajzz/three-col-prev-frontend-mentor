import React from "react";
import "./ThreeColumnPreview.css";

const ThreeColumnPreview = () => {
	return (
		<>
			<div className="card-container">
				<div className="card">
					<div className="sedans">
						<div className="upper-container">
							<div className="image-container"></div>
							<h1>SEDANS</h1>
							<p>
								Choose a sedan for its affordability and excellent fuel economy.
								Ideal for cruising in the city or on your next road trip.
							</p>
						</div>
						<div className="lower-container">
							<button className="learn-more-btn">Learn More</button>
						</div>
					</div>
					<div className="suvs">
						<div className="upper-container">
							<div className="image-container"></div>
							<h1>SUVS</h1>
							<p>
                Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
							</p>
						</div>
						<div className="lower-container">
							<button className="learn-more-btn">Learn More</button>
						</div>
          </div>
					<div className="luxury">
						<div className="upper-container">
							<div className="image-container"></div>
							<h1>LUXURY</h1>
							<p>
                Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
							</p>
						</div>
						<div className="lower-container">
							<button className="learn-more-btn">Learn More</button>
						</div>
          </div>
				</div>
			</div>
		</>
	);
};

export default ThreeColumnPreview;
