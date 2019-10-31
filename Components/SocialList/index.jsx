import PropTypes from 'prop-types';
import StyledSocialList from './styled';
import generateSocialHyperlinks from '../../lib/generateSocialHyperlinks';

const SocialList = ({ socialHyperlinks }) => (
  <StyledSocialList>
    {generateSocialHyperlinks(socialHyperlinks)}
  </StyledSocialList>
);

SocialList.propTypes = {
  socialHyperlinks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SocialList;