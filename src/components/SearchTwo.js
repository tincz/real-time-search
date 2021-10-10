import React, {useState, useEffect} from 'react';

// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function SearchTwo() {
	const [profiles, setProfiles] = useState([]);
	const [search, setSearch] = useState([]);
	const [info, setInfo] = useState([]);

		useEffect(() => {
			const getSearch = async () => {
				const response = await fetch(`http://localhost:4000/profiles`, {
					method: 'GET',
				})
					const data = await response.json();
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
				}
		}, [info]); 

	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col sm={12} md={4}>
					<Form>
				        <input
				            type="text"
				            id="search_one"
				            value={info}
				            onChange={(e) => setInfo(e.target.value)}
				            placeholder="Search Country or Code"
				        />
        				<Button 
        					variant="success" 
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