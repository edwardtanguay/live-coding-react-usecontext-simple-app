import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const Customers = () => {
	const { companyName } = useContext(AppContext);

	return (
		<>
			<h2>Customers</h2>
			<p>These are the customers of the company named: {companyName}</p>
		</>
	);
};