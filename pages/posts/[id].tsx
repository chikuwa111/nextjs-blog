import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { Date } from '@/components/date';
import { Layout } from '@/components/layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import utilStyles from '@/styles/utils.module.css';

type Params = {
  id: string;
};

type Props = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postData = await getPostData(params?.id ?? '');
  return {
    props: {
      postData,
    },
  };
};
