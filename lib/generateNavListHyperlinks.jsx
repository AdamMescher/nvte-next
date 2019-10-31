import Link from 'next/link';

const generateNavListHyperlinks = (hyperlinks) => (
    hyperlinks.map(hyperlink => (
      <li key={hyperlink.txt}>
        <Link href={`#${hyperlink.href}`}>
          <a href={`#${hyperlink.href}`}>{`${hyperlink.txt}`}</a>
        </Link>
      </li>
    ))
);

export default generateNavListHyperlinks;