import cn from 'classnames';
import Head from 'next/head';
import Link from 'next/link';

import {
  borderCircle,
  heading2Xl,
  headingLg,
  colorInherit,
} from '@/constants/style';

const NAME = 'chikuwa111';
export const SITE_TITLE = 'Next.js Sample Website';

type Props = {
  home?: boolean;
  children: React.ReactNode;
};

export function Layout({ home, children }: Props) {
  return (
    <div className="max-w-xl px-0 py-4 mt-12 mb-24 mx-auto">
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
            <img
              src="/images/profile.jpg"
              className={cn(borderCircle, 'w-32', 'h-32')}
              alt={NAME}
            />
            <h1 className={cn(heading2Xl)}>{NAME}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={cn(borderCircle, 'w-24', 'h-24')}
                  alt={NAME}
                />
              </a>
            </Link>
            <h2 className={cn(headingLg)}>
              <Link href="/">
                <a className={cn(colorInherit)}>{NAME}</a>
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
