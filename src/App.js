import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Links from './components/Links';

function App() {
	return (
		<div className='flex flex-col justify-start items-center bg-gray-800 border h-auto min-h-screen'>
			<Navbar />
			<div className='mt-20 w-11/12 flex flex-col gap-6'>
				<Form />
				<About />
				<Links />
			</div>
		</div>
	);
}

export default App;
