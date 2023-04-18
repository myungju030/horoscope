import Head from "next/head";

export default function HeadInfo({ title, keyword, content }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keyword} />
      <meta name="description" content={content} />
    </Head>
  );
}

HeadInfo.defaultProps = {
  title: "별자리 운세",
  keyword: "별자리 운세",
  content: "별자리 운세",
};
