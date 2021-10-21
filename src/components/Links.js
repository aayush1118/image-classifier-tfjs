import React from 'react';
import { BiLink, BiRightArrowAlt } from 'react-icons/bi';

function Links() {
	const links = [
		{
			label: 'Github Repo',
			link: 'https://github.com/aayush1118/image-classifier-tfjs',
		},
		{
			label: 'Tensorflow js',
			link: 'https://www.tensorflow.org/js',
		},
		{
			label: 'CIFAR-10 Dataset',
			link: 'https://www.cs.toronto.edu/~kriz/cifar.html',
		},
	];

	return (
		<div className='bg-gray-900 text-white rounded-xl shadow-lg p-4 flex flex-col items-center gap-4'>
			<h2 className='text-2xl text-green-500'>References</h2>
			<div className='flex flex-col gap-4 justify-items-stretch w-full'>
				{links.map(x => (
					<a
						href={x.link}
						className='cursor-pointer py-2 px-4 bg-gray-800 text-white rounded w-full hover:bg-green-600
                         transition-all duration-300 shadow-lg group flex justify-between group'
						target='_blank'
						rel='noreferrer'
					>
						<div className='flex justify-center items-center gap-1 font-semibold font-mono'>
							<BiLink />
							{x.label}
						</div>
						<span className='flex justify-center items-center gap-1 transition-all duration-300 opacity-0 group-hover:opacity-100'>
							visit <BiRightArrowAlt />
						</span>
					</a>
				))}
			</div>
		</div>
	);
}

export default Links;
