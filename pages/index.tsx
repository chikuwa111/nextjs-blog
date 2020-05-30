import cn from 'classnames';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Date } from '@/components/date';
import { Layout, SITE_TITLE } from '@/components/layout';
import {
  headingMd,
  padding1px,
  headingLg,
  list,
  listItem,
  lightText,
} from '@/constants/style';
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
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={cn(headingMd, padding1px)}>
        <h2 className={cn(headingLg)}>Blog</h2>
        <ul className={cn(list)}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={cn(listItem)} key={id}>
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
