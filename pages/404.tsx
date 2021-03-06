import Layout from '@common/components/Layout';
import { ReactNode } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function NotFound() {
  return (
    <>
      <NextSeo
        title="Next.js Boilerplate Presentation"
        description="Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          451 – Unavailable For Legal Reasons
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. I&apos;m guessing you spelled something wrong. Can
          you double check that URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </>
  );
}

NotFound.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
