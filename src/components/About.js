import React from 'react';
import { BiHash } from 'react-icons/bi';

function About() {
	return (
		<div className='bg-gray-900 rounded-xl shadow-lg flex flex-col items-center gap-4 p-4'>
			<h2 className='text-2xl text-green-500'>About</h2>
			<ListItem
				head='Powered by tensorflow.js'
				text='TensorFlow.js is a JavaScript Library for training and deploying
				machine learning models in the browser and in Node.js. It
				utilizes webGl to accelerate operations in web browser.'
			/>
			<ListItem
				head='CIFAR-10 Dataset'
				text='The CIFAR-10 data consists of 60,000 32x32 color images in 10
				classes, with 6000 images per class. There are 50,000 training
				images and 10,000 test images in the official data. It has
				following 10 classes: airplane, automobile, dog, cat, frog,
				horse, ship, truck, deer, bird'
			/>
		</div>
	);
}

const ListItem = ({ head, text }) => {
	return (
		<div className='flex flex-col gap-2'>
			<h4 className='text-xl text-green-500 flex items-center gap-1'>
				<BiHash />
				{head}
			</h4>
			<p className='text-white'>{text}</p>
		</div>
	);
};

export default About;
