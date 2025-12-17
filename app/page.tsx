import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the Home Page" />
      </Head>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to the Home Page</h1>
        </div>
    </>
  );
}
