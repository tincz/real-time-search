import React, {useState} from 'react';

// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function SearchOne() {
	const [profiles, setProfiles] = useState([]);
	const [search, setSearch] = useState([]);
	const [info, setInfo] = useState([]);

	function searchOne(e){
		e.preventDefault();

		fetch(`https://fast-reaches-27646.herokuapp.com/profiles`, {
			method: 'GET',	
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setProfiles(data);
		
				const getProfile = data.filter(function (search) {

					if (search.country_code.toLowerCase() === `${info}`){
						return search.country_code.toLowerCase() === `${info}`;
					}	

					if (search.country.toLowerCase() === `${info}`){
						return search.country.toLowerCase() === `${info}`;
					}
				});

				console.log(getProfile);
				setSearch(getProfile);
				});
	};

	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col sm={12} md={4}>
					<Form onSubmit={searchOne}>
				        <input
				            type="text"
				            id="search_one"
				            value={info}
				            onChange={(e) => setInfo(e.target.value)}
				            placeholder="Search Country or Code"
				        />
        				<Button 
        					variant="primary" 
        					type="submit">Search</Button>
					</Form>
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col sm={12} md={8}>
					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Gender</th>
								<th>City</th>
								<th>Country</th>
								<th>Code</th>
							</tr>
						</thead>
						<tbody>
							{
								search.map((search) => (
									<tr key={search._id}>
										<td>{search.first_name}</td>
										<td>{search.last_name}</td>
										<td>{search.email}</td>
										<td>{search.gender}</td>
										<td>{search.city}</td>
										<td>{search.country}</td>
										<td>{search.country_code}</td>
									</tr>
								))
							}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	)
}