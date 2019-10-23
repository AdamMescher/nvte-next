import Link from 'next/link';
import socialHyperlinks from './socialHyperlinks';

const generateSocialHyperlinks = () => (
    socialHyperlinks.map(hyperlink => (
        <li className="social-list-item" key={hyperlink.name}>
            <Link href={hyperlink.href}>
                <a target="_blank">
                    <img src={hyperlink.img.src} alt={hyperlink.img.alt} />
                </a>
            </Link>
        </li>
    ))
);

export default generateSocialHyperlinks;