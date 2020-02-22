import React from 'react';

const Card = () => {
	return (
		<div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
			<img alt="robot" src="https://robohash.org/test?200x200" />
			<div>
				<h2>Robot Name</h2>
				<p>robot.name@mail.com</p>
			</div>
		</div>
	);
}

export default Card;