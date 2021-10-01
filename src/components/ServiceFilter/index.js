import React from 'react';
import { Label, ServiceFilterStyle } from './styles';
import IconFilter from '../IconFilter';

function ServiceFilter() {
  return (
    <ServiceFilterStyle>
      <IconFilter />
      <Label> Guia de serviço </Label>
    </ServiceFilterStyle>
  );
}

export default ServiceFilter;
