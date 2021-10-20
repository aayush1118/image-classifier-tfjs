import React from 'react';
import { BiSearchAlt, BiCodeAlt, BiGridAlt } from 'react-icons/bi';

const Navbar = () => {
	return (
		<div
			className='fixed top-0 w-screen flex justify-center bg-gray-900 text-white
			py-1 shadow-lg'
		>
			<Icon icon={<BiSearchAlt size='28' />} />
			<Icon icon={<BiGridAlt size='28' />} />
			<Icon icon={<BiCodeAlt size='28' />} />
		</div>
	);
};

const Icon = ({ icon, text = 'tooltip' }) => (
	<div className='relative flex items-center justify-center h-12 w-12 my-1 mx-2 cursor-pointer bg-gray-800 text-green-500 rounded-2xl  hover:text-white hover:bg-green-600 transition-all duration-300 ease-in shadow-lg group'>
		{icon}
		<span className='absolute w-auto p-2 m-2 top-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-300 transform opacity-0 group-hover:opacity-100'>
			{text}
		</span>
	</div>
);

export default Navbar;
