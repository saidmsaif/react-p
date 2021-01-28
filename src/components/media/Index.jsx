import React, { Component } from 'react'
import { Media } from 'react-bootstrap'

export default class Index extends Component {
	state = {
		students: [
			{
				id: "1949CSE00761",
				name: "Saif",
				varsity: "MIU",
			},

			{
				id: "1949CSE00789",
				name: "Sajib",
				varsity: "MIU",
			},

			{
				id: "1949CSE00796",
				name: "Shanto",
				varsity: "MIU",
			},

			{
				id: "1949CSE00***",
				name: "Dingdong",
				varsity: "MIU",
			},
		],
	};

	render() {
		const menu = this.state.students.map((studentData) => {
			return (
				<div className='col-12'>
					<Media>
						<img src='' alt='' width={64} height={64} />
						<Media.Body className='ml-3'>
							<h3>{studentData.name}</h3>
							<p>{studentData.id}</p>
							<p>{studentData.varsity}</p>
						</Media.Body>
					</Media>
				</div>
			);
		});

		return <>{menu}</>;
	}
}
