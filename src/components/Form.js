import React from 'react';

function Form() {
	return (
		<div className='bg-gray-900 text-white mt-20 w-11/12 rounded-xl shadow-md p-5'>
			<input type='file' name='image' placeholder='Select Image' />
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	);
}

export default Form;
