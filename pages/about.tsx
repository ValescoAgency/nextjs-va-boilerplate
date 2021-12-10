import Layout from '@common/components/Layout';
import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

const About = () => (
  <>
    <NextSeo
      title="Next.js Boilerplate Presentation"
      description="Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
    />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </>
);

export default About;

About.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
