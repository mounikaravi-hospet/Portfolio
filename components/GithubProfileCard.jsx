import React from "react";

import { Card, Col, Row, Container,  Button,
	Form,
	FormGroup,
	Input,
	Label } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import emailjs from 'emailjs-com'
// import profile from "../public/img/Images/profile"

function sendEmail(e){
	e.preventDefault();

  emailjs.sendForm('service_4k6tejj', 'template_t6wa848', e.target, 'user_RWJNCUZhLBTCIjUljTGpn')
	.then((result) => {
		console.log(result.text);
	}, (error) => {
		console.log(error.text);
	});
	e.target.reset();
  }

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
							
							
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Reach out to me! </h2>

							<h4 className="text-white">
							mounikaravi.hospet@gmail.com
							</h4>
							
							<p className="lead text-white mt-3">
								
								  <Form className="form" onSubmit={sendEmail}>
								  <FormGroup>
										<Label for="contactName">Name</Label>
										<Input
										type="text"
										name="contactName"
										id="contactName"										
										/>
									</FormGroup>

									<FormGroup>
										<Label for="contactEmail">Email</Label>
										<Input
										type="email"
										name="contactEmail"
										id="contactEmail"										
										/>
									</FormGroup>

									<FormGroup>
										<Label for="contactSubject">Subject</Label>
										<Input
										type="text"
										name="contactSubject"
										id="contactSubject"										
										/>
									</FormGroup>

									<FormGroup>
										<Label for="contactMessage">Message</Label>
										<Input
										type="textarea"
										name="contactMessage"
										id="contactMessage"										
										/>
									</FormGroup>
									
									<Button type="submit">Submit</Button>
								</Form>
							</p>
							<p className="text-white mt-3">{prof.bio}</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								Atlanta, Georgia
							</div>
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
