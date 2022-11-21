import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="grid grid-cols-6 h-screen w-screen">Hello World</div>
    </>
  );
}
