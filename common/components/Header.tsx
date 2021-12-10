import Link from 'next/link';
import { DefaultSeoProps } from 'next-seo';

export default function Header(headerData) {
  const { title, description } = headerData;
  console.log(title);
  return (
    <header className="border-b border-gray-300">
      <div className="pt-16 pb-8">
        <div className="font-bold text-3xl text-gray-900">{title}</div>
        <div className="text-xl">{description}</div>
      </div>
      <div>
        <ul className="flex flex-wrap text-xl">
          <li className="mr-6">
            <Link href="/">
              <a className="text-gray-700 border-none hover:text-gray-900">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about">
              <a className="text-gray-700 border-none hover:text-gray-900">
                About
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <a
              className="text-gray-700 border-none hover:text-gray-900"
              href="https://github.com/ValescoAgency/nextjs-va-boilerplate"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
