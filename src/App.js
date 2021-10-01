/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import HeaderMain from './components/HeaderMain';
import IconFilter from './components/IconFilter';
import { ServiceFilter, Label } from './components/ServiceFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

      <ServiceFilter>
        <IconFilter />
        <Label> Guia de serviço </Label>
      </ServiceFilter>
    </>
  );
}

export default App;
