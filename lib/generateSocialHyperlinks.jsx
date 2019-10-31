import socialHyperlinks from './socialHyperlinks';

const generateSocialHyperlinks = () => (
    socialHyperlinks.map(hyperlink => (
      <li className="social-list-item" key={hyperlink.name}>
        <a href={hyperlink.href} target="_blank" rel="noopener noreferrer">
          <img src={hyperlink.img.src} alt={hyperlink.img.alt} />
        </a>
      </li>
    ))
);

export default generateSocialHyperlinks;