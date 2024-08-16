import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"
import {
	FaClock,
	FaSpa,
	FaParking,
	FaCat,
	FaTshirt,
	FaUtensils,
	FaWifi
} from "react-icons/fa"

const HotelService = () => {
	return (
		<>
			<div className="mb-2">
				<Header title={"Our Services"} />

				<Row className="mt-4">
					<h4 className="text-center">
						Services at <span className="hotel-color"> NOVA - </span>Hotel
						<span className="gap-2">
							<FaClock className="ml-5" /> 24-Hour Front Desk
						</span>
					</h4>
				</Row>
				<hr />

				<Row xs={1} md={2} lg={3} className="g-4 mt-2">
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaWifi /> WiFi
								</Card.Title>
								<Card.Text style={{ color: "black" }}>Stay connected with high-speed internet access available throughout the hotel.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaUtensils /> Restaurant
								</Card.Title>
								<Card.Text style={{ color: "black" }}>Delight your taste buds with culinary delights at our on-site restaurant.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaTshirt /> Laundry
								</Card.Title>
								<Card.Text style={{ color: "black" }}>travel light and worry-free with our convenient laundry services.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaParking /> Parking
								</Card.Title>
								<Card.Text style={{ color: "black" }}>Enjoy the convenience and peace of mind with our on-site parking facilities.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaSpa /> SPA
								</Card.Title>
								<Card.Text style={{ color: "black" }}>Indulge in relaxation and rejuvenation at our luxurious spa.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaCat /> Pet care service
								</Card.Title>
								<Card.Text style={{ color: "black" }}>Bring along your furry companions on your travels and rest assured they'll be well taken care of .</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<hr />
		</>
	)
}

export default HotelService