import Link from 'next/link';

const generateNavListItems = (hyperlinks) => (
    hyperlinks.map(hyperlink => (
        <li>
            <Link href={`#${hyperlink.href}`}>
                <a>{`${hyperlink.txt}`}</a>
            </Link>
        </li>
    ))
);

export default generateNavListItems;