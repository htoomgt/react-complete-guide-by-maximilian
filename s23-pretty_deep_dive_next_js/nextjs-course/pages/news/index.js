// our-domain.com/news
import { Fragment } from 'react';
import Link from 'next/link';



function NewsPage() {
    return (
        <Fragment>
            <h1>The news Page</h1>
            <ul>
                <li>
                    <Link href="/news/next-js-is-a-great-framework"> NextJS is A Great Framework</Link>
                </li>
                <li> 
                    <Link href="/news/next-js-is-good-to-study">NextJS is good to study. </Link></li>
                <li> 
                    <Link href="/news/js-is-great-too">JS is great too. </Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;