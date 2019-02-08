import StyledSocialList from './styled';
import generateSocialHyperlinks from '../../lib/generateSocialHyperlinks';

const SocialList = ({ socialHyperlinks }) => (
    <StyledSocialList>
        {generateSocialHyperlinks(socialHyperlinks)}
    </StyledSocialList>
);

export default SocialList;