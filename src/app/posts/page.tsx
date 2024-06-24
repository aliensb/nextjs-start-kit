import React from "react";
import { getAllPosts } from "@/app/lib/post";
import Link from "next/link";

export default async function Posts() {
  const postFiles = await getAllPosts();
  return (
    <div>
      <ul>
        {postFiles.map((p) => (
          <li key={p}>
            <Link href={`/posts/${p}`}>{p}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
