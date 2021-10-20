import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
	return (
		<div className='flex flex-col justify-start items-center bg-gray-800 border h-screen '>
			<Navbar />
			<Form />
		</div>
	);
}

export default App;
