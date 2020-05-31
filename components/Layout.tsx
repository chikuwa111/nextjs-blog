import cn from 'classnames';
import Head from 'next/head';
import Link from 'next/link';

import { SITE_TITLE } from '@/constants/setting';
import { heading2Xl, headingLg } from '@/constants/style';

const NAME = 'chikuwa111';

type Props = {
  home?: boolean;
  children: React.ReactNode;
};

export function Layout({ home, children }: Props) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-12 mb-24 px-4 mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            SITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <img src="/images/profile.jpg" className="w-32 h-32" alt={NAME} />
            <h1 className={cn(heading2Xl)}>{NAME}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className="w-24 h-24"
                  alt={NAME}
                />
              </a>
            </Link>
            <h2 className={cn(headingLg)}>
              <Link href="/">
                <a className="text-current">{NAME}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12 mx-0 mb-0">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
