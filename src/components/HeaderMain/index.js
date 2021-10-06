import styled from 'styled-components';
import LogoMain from '../LogoMain';

const HeaderMain = styled.header`
    display:flex;
    justify-content: space-between;
    background-color: #3c5268;
    padding: var(--gap-small) var(--gap-small) 28px;

    & > ${LogoMain}{
        width: 24px;
    }

`;
export default HeaderMain;
