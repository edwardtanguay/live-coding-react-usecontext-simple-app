import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const Employees = () => {
	const { companyName } = useContext(AppContext); 

	return (
		<>
			<h2>Employees</h2>
			<p>These are the employees of the company named: {companyName}</p>
		</>
	);
};