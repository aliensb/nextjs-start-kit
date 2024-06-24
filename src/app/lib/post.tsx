import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

// type Frontmatter = {
//   title: string;
//   author: string;
// };

// type Post = {
//   content: React.ReactNode;
//   frontmatter: Frontmatter;
// };

const rootDirectory = path.join(process.cwd(), "src/content");

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-emerald-400">
      {props.children}
    </h1>
  ),
};

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(".mdx", "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { content, frontmatter } = await compileMDX<{
    title: string;
    author: string;
  }>({
    components,
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypePrettyCode],
      },
    },
  });
  return { content, frontmatter };
}

export async function getAllPosts() {
  const files = await fs.readdirSync(rootDirectory);
  return files;
}
