import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(6, 200px);
  grid-gap: 5rem;
  grid-auto-flow: dense;
`;

export default StyledGallery;