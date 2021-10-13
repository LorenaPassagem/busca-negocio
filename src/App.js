/* eslint-disable react/react-in-jsx-scope */
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import HeaderMain from './components/HeaderMain';
import ServiceFilter from './components/ServiceFilter';
import ButtonFixed from './components/ButtonFixed';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>
      <ServiceFilter />
      <ButtonFixed> Insira o seu negócio</ButtonFixed>
    </>
  );
}

export default App;
