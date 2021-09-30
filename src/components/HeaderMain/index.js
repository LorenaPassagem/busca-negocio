import styled from 'styled-components';
import LogoMain from '../LogoMain';

const HeaderMain = styled.header`
    display:flex;
    justify-content: space-between;
    background-color:blue;

    & > ${LogoMain}{
        width: 24px;
    }

`;
export default HeaderMain;
