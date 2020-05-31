import cn from 'classnames';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Date } from '@/components/Date';
import { Layout } from '@/components/Layout';
import { SITE_TITLE } from '@/constants/setting';
import { headingMd, headingLg, lightText } from '@/constants/style';
import { getSortedPostsData } from '@/lib/posts';

type Props = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={cn(headingMd)}>
        <p>Chikuwa is paste made of fish meat.</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={cn(headingMd, 'pt-px')}>
        <h2 className={cn(headingLg)}>Blog</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-0 mb-4 mx-0" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={cn(lightText)}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
