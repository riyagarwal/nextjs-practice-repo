"use client";
// the above line is used to make the component a client component
// we are telling the nextjs compiler to include this component in the js bundle

import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <a href="/users">Users</a>
      <br />

      {/* only sends request for the requested page */}
      <Link href="/users">users</Link>
      <ProductCard />
    </main>
  );
}
