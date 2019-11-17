import styled from 'styled-components';
import { device } from 'helpers/breakpoints';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 16px;

  ${device.laptopM} {
    padding: 0;
  }
`;

export default Container;
