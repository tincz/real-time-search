import React, {useState, useEffect} from 'react';
import 'components/search.css';

// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export default function SearchTwo() {
	const [profiles, setProfiles] = useState([]);
	const [text, setText] = useState('');
	const [suggestion, setSuggestion] = useState([]);

	useEffect(() => {
		const loadProfiles = async () => {
			const response = await fetch('https://fast-reaches-27646.herokuapp.com/profiles', {
			method: 'GET',
			});
			const data = await response.json();
			console.log(data);
			setProfiles(data);
		}
		loadProfiles();
	}, []);

	const onChangeHandler = (text)=> {
		let matches = []
		if (text.length>0) {
			matches = profiles.filter(profiles => {
				const regex = new RegExp(`${text}`, "gi");
				return profiles.country.match(regex) || profiles.country_code.match(regex)
			})
		}
		console.log(matches)
		setSuggestion(matches)
		setText(text)
	}

	return (
		<Container fluid>
			<Row className="justify-content-center" id="searchbar">
				<Col sm={12} md={4}>
					<Form>
				        <input
				        	className="col-md-12"
				            type="text"
				            id="search"
				            value={text}
				            onChange={e => onChangeHandler(e.target.value)}
				            placeholder="Search Country or Code"
				        />
					</Form>
				</Col>
			</Row>

			<Row className="justify-content-center" id="table">
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
								suggestion.map((suggestion) => (
									<tr key={suggestion._id}>
										<td>{suggestion.first_name}</td>
										<td>{suggestion.last_name}</td>
										<td>{suggestion.email}</td>
										<td>{suggestion.gender}</td>
										<td>{suggestion.city}</td>
										<td>{suggestion.country}</td>
										<td>{suggestion.country_code}</td>
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