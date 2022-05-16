import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const companyName = 'Hamburg Robotics GmbH';

	return (
		<AppContext.Provider value={{
			companyName
		}}>
			{children}
		</AppContext.Provider>
	)

}