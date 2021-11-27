import Header from '../components/Header'
import Footer from '../components/Footer'
import { client } from "../../libs/client";

export default function WirkId({ work }) {
  return (
    <>
      {/* <Header /> */}
      <main>
        <h1 className="text-xs font-bold text-gray-500">{work.title}</h1>
        <p>{work.publishedAt}</p>
        <h1>{work.workDetails[0].title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${work.workDetails[0].body}`,
          }}
        />
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
