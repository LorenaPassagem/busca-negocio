/* eslint-disable react/react-in-jsx-scope */

import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import HeaderMain from './components/HeaderMain';
import ServiceFilter from './components/ServiceFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>
      <ServiceFilter />
    </>
  );
}

export default App;
