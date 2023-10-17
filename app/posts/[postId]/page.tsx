import getFormattedDate from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
    params: { postId: string };
}

export const generateStaticParams = () => {
    const posts = getSortedPostsData();

    return posts.map((post) => {
        postId: post.id;
    });
};

export const generateMetadata = ({ params }: Props) => {
    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
    };
};

const Post = async ({ params }: Props) => {
    const posts = getSortedPostsData();
    const { postId } = params;

    if (!posts.find((post) => post.id === postId)) {
        return notFound();
    }

    const { title, date, htmlContent } = await getPostData(postId);
    const publishedDate = getFormattedDate(date);

    return (
        <main className="px-6 mx-auto prose prose-xl prose-slate dark:prose-invert">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-1 text-sm">{publishedDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: htmlContent }} />
                <p>
                    <Link href="/">Back to home</Link>
                </p>
            </article>
        </main>
    );
};

export default Post;
