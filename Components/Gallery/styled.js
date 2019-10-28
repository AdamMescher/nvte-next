import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24%, 1fr));
  grid-gap: 15px;
  @media(max-width: 1500px) {
    grid-template-columns: repeat(auto-fit, minmax(32%, 1fr));
  }
  @media(max-width: 900px){
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
  @media(max-width: 500px){
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export default StyledGallery;