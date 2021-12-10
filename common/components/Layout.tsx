import { ReactNode } from 'react';
import { DefaultSeoProps } from 'next-seo';
import SEO from '../../next-seo.config';
import Footer from '@common/components/Footer';
import Header from '@common/components/Header';

type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({
  children,
  SEO
}: {
  children: LayoutProps;
  SEO: DefaultSeoProps;
}) {
  return (
    <div className="antialiased w-full text-gray-700">
      <div className="max-w-screen-md mx-auto">
        <Header headerData={SEO} />
        <main className="py-5 text-xl content">{children}</main>
        <Footer {...SEO} />
      </div>
    </div>
  );
}
