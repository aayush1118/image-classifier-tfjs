import React from 'react';
import { BiSearchAlt, BiCodeAlt, BiGridAlt } from 'react-icons/bi';

const Navbar = () => {
	return (
		<div className='fixed top-0 w-screen flex justify-center bg-gray-900 text-white py-1 shadow-lg'>
			<Icon icon={<BiSearchAlt size='28' />} />
			<Icon icon={<BiGridAlt size='28' />} />
			<Icon icon={<BiCodeAlt size='28' />} />
		</div>
	);
};

const Icon = ({ icon }) => <div className='navbar-icon group'>{icon}</div>;

export default Navbar;
