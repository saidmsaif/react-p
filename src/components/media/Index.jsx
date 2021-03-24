import React, { Component } from 'react'
import { Media } from 'react-bootstrap'

export default class Index extends Component {
	state = {
		students: [
			{
				id: "1949CSE00761",
				thumb: "logo192.png",
				name: "Saif",
				varsity: "MIU",
			},
			{
				id: "1949CSE00789",
				thumb: "logo192.png",
				name: "Sajib",
				varsity: "MIU",
			},
			{
				id: "1949CSE00796",
				thumb: "logo192.png",
				name: "Shanto",
				varsity: "MIU",
			},
			{
				id: "1949CSE00***",
				thumb: "logo192.png",
				name: "Dingdong",
				varsity: "MIU",
			}
		],
	};

	render() {
		const menu = this.state.students.map((studentData) => {
			return (
				<div className='col-12'>
					<Media>
						<img
							src={studentData.thumb}
							alt=''
							width={64}
							height={64}
						/>
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
