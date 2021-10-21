import React from 'react';

function Form() {
	return (
		<div className='bg-gray-900 text-white rounded-xl shadow-lg p-4 flex flex-col items-center gap-4'>
			<h2 className='text-2xl text-green-500'>Select an image!</h2>
			<input
				type='file'
				name='image'
				placeholder='Select Image'
				className='text-sm bg-gray-800 p-2 rounded-lg shadow-lg cursor-pointer'
			/>
			<div className='flex flex-col gap-4 items-center sticky cursor-default group'>
				<img
					src='https://picsum.photos/200/200'
					alt=''
					className='rounded-lg shadow-md transform h-64 transition-all duration-300 group-hover:opacity-60 hover:scale-95'
				/>
				<p className='font-semibold text-lg absolute top-1/2 bg-green-600 text-white px-1'>
					horse 95%
				</p>
			</div>
		</div>
	);
}

export default Form;
