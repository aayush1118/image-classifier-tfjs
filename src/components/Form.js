import React, { useState, useEffect } from 'react';
import { BiShuffle } from 'react-icons/bi';
import horse from '../img/horse.jpg';
import * as tf from '@tensorflow/tfjs';

function Form() {
	const url = {
		model: 'https://ghcdn.rawgit.org/aayush1118/image-classifier-tfjs/main/src/model/my-model.json',
	};

	const class_names = [
		'airplane',
		'automobile',
		'bird',
		'cat',
		'deer',
		'dog',
		'frog',
		'horse',
		'ship',
		'truck',
	];

	async function loadModel(url) {
		try {
			const modelJSON = await tf.loadLayersModel(url.model);

			setModel(modelJSON);
			console.log('Load model success');

			let test = tf.browser.fromPixels(
				document.getElementById('testImage')
			);
			test.reshape([1, 32, 32, 3]);
			console.log(test);

			const output = model.predict(test);
			const predictions = Array.from(output.argMax(1).dataSync());

			console.log(class_names[predictions[0]]);
		} catch (err) {
			console.log(err);
		}
	}
	//React Hook
	const [model, setModel] = useState();
	useEffect(() => {
		tf.ready().then(() => {
			loadModel(url);
		});
	}, []);

	return (
		<div className='bg-gray-900 text-white rounded-xl shadow-lg p-4 flex flex-col items-center gap-4'>
			<h2 className='text-2xl text-green-500'>Select an image!</h2>
			<img src={horse} width='32' height='32' id='testImage' alt='' />
			<input
				type='file'
				name='image'
				placeholder='Select Image'
				className='text-sm bg-gray-800 p-2 rounded-lg shadow-lg cursor-pointer'
			/>
			<div className='flex flex-col gap-4 items-center sticky cursor-default group bg-gray-800 p-4 rounded-lg'>
				<img
					src={horse}
					alt=''
					className='rounded-lg shadow-md transform h-60 transition-all duration-300 group-hover:opacity-60 hover:scale-95'
				/>
				<p className='font-semibold text-lg absolute top-1/2 bg-green-600 text-white px-1'>
					horse 95%
				</p>
			</div>
			<div>
				<button
					className='flex bg-green-600 font-semibold items-center p-1 px-3 rounded gap-1 transition-all duration-200
				 hover:bg-gray-800 hover:text-green-400 border border-opacity-0 hover:border-green-400 uppercase font-mono'
				>
					<BiShuffle /> pick one
				</button>
			</div>
		</div>
	);
}

export default Form;
