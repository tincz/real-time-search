import React from 'react';
import 'index.css';

export default function AppNavbar(){
	return(
		<div>
			<h1>Welcome To Real Time Search</h1>
				<h2>Instructions:</h2>
					<h5>There are two search tabs on this app.</h5>
						<li>On Search Tab - Type in the country or country code on the search bar and by clicking search, the results which is the person profile from the API will be display on the table.</li>
						<p>For example: You type in the country code "PH" then it will display all profiles that has the country code "PH". You can also type in the name of the country and it will display result if they're on the API. The search bar is case insensitive.</p>
						<li>On Search (Auto Filter) Tab - When you are typing the country or country code it will display the suggested result.</li>
		</div>
	)
};