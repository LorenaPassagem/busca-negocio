import styled from 'styled-components';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.nav`
    background-color: rgb(61,76,92);
    display: flex;

    & > ${IconFilter}{
        margin-right: 20px;
    }
`;

export const Label = styled.p`
    color: #fffcee;
    font-family: 'comfortaa';
    font-size: 20px;
`;
