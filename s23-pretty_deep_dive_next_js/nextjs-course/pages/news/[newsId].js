// our-domain.com/news/something-important
import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();

    console.log(router.query.newsId);

    // send a request to the backend API here
    // to fetch the news item with news Id

    return (
        <>
            <h1> Detail page</h1>
        </>
    );
}

export default DetailPage;