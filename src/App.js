import './App.css';
import { ProductListing, Nav } from './components';
import { useGetProductsFromServer } from './server-requests';
function App() {
	const { loading, error } = useGetProductsFromServer();

	return (
		<>
			<Nav />
			<div className='App'>
				{loading && <p>loading....</p>}
				{error && <p>Something went wrong. Please refresh the page....</p>}
				<ProductListing />
			</div>
		</>
	);
}

export default App;
