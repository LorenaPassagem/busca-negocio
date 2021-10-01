/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import HeaderMain from './components/HeaderMain';
import IconFilter from './components/IconFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>
      <IconFilter />
    </>
  );
}

export default App;
