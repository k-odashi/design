import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'
import { client } from "../../libs/client";

export default function WirkId({ work }) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray">
          <Image
            src={work.thumb.url}
            width="1020px"
            height="600"
            layout="responsive"
            alt="Picture of the author"
            className="object-cover"
          />
          <div className="max-w-5xl mx-auto p-10">
            <h1 className="text-2xl font-bold text-gray-500">No.{work.number} {work.title}</h1>
            <time dateTime={work.publishedAt}>{work.publishedAt}</time>
            <p>{work.category}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto p-10">
          <h1 className="text-2xl font-bold">{work.workDetails[0].title}</h1>
          <div
            className="content-style"
            dangerouslySetInnerHTML={{
              __html: `${work.workDetails[0].body}`,
            }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "content" });
  const paths = data.contents.map((content) => `/work/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "content", contentId: id });

  return {
    props: {
      work: data,
    },
  };
};
