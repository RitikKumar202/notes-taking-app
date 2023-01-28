import './App.css';

// Note Context
import ContextProvider from './context/Context';

//React Components
import Navigation from './navigation/Navigation';

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
