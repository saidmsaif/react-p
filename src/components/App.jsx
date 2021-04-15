import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
			<>
				<div className='bg-gray-200 py-28'>
					<div className='container mx-auto'>
						<h1 className='text-center text-7xl font-serif'>
							Tailwind CSS Practice
						</h1>
					</div>
				</div>

				<div className='container mx-auto'>
					<div className='py-4'>
						<div className='flex space-x-9 '>
							<div className='card sm:flex-1 bg-green-400 py-9 px-10 h-24 text-light shadow-2xl rounded-2xl'>
								One
							</div>
							<div
								className='card sm:flex-1 py-24 px-10 text-light shadow-2xl rounded-2xl bg-blend-overlay bg-gray-700 bg-cover'
								style={{
									backgroundImage:
										'url("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")',
								}}
							>
								<p className='text-1xl text-white align-top'>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit
								</p>
							</div>
							<div className='card sm:flex-1 bg-red-600 py-9 px-10 h-24 text-light shadow-2xl rounded-2xl'>
								<h1 className='text-white'>Box One</h1>
							</div>
						</div>
					</div>
				</div>
			</>
		);
    }
}

export default App