/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import HeaderMain from './components/HeaderMain';

function App() {
  return (
    <HeaderMain>
      <LogoMain />
      <IconSearch />
    </HeaderMain>
  );
}

export default App;
