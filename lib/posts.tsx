import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData() {
    // Get file names under /blogposts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove .md from filename to get id
        const id = fileName.replace(/\.md$/, '');

        // Read md file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        };

        // Combine the data with id
        return blogPost;
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const htmlContent = processedContent.toString();

    // Combine the htmlcontent with the BlogPost type
    const blogPostWithHTML: BlogPost & { htmlContent: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        htmlContent,
    };

    return blogPostWithHTML;
}
