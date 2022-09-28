import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './source/navigation';

const App = () => {
	return (
		<SafeAreaProvider style={{flex: 1}} >
			<PaperProvider>
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
			</PaperProvider>
		</SafeAreaProvider>
	)
}

export default App;
