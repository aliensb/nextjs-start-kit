import { getPostBySlug } from "@/app/lib/post";
import { getAllPosts } from "@/app/lib/post";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p }));
}

export default async function Posts({ params }: { params: { slug: string } }) {
  const { content, frontmatter } = await getPostBySlug(params.slug);
  return (
    <section className="py-24">
      <div className="container">
        <header className="rounded bg-gray-100 p-8">
          <h1 className="font-serif text-3xl">{frontmatter.title}</h1>
          <p className="text-sm font-light uppercase leading-snug tracking-wide">
            {frontmatter.author}
          </p>
        </header>
        <main className="prose mt-12">{content}</main>
      </div>
    </section>
  );
}
