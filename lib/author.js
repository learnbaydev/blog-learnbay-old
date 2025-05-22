import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory containing your markdown files
const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllAuthors() {
  // Read all filenames in the posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Map over each file to extract the author's name from the front matter
  const allAuthors = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse front matter and extract the author
    const { data: frontMatter } = matter(fileContents);
    return frontMatter.author; // Assuming 'author' is part of the front matter
  });

  // Remove duplicates and undefined values
  const uniqueAuthors = [...new Set(allAuthors.filter(Boolean))];

  return uniqueAuthors;
}
