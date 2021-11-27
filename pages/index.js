// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Link from "next/link";
import { client } from "../libs/client";
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home({ data }) {

  return (
    <div className="font-body">

      {/* <Header data={data} /> */}
{/* 
      <main className="flex flex-col justify-center p-5">
        {data.map((item) => (
          <section key={item.id} className="mb-8 grid grid-cols-3">

            <Link href={`/work/${item.id}`}>
              <a className="col-span-1 flex align-middle flex-col justify-center justify-self-end text-right m-5">
                <p className="text-sm font-semibold">No. {item.number}</p>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p>{item.category}</p>
              </a>
            </Link>

            <Link href={`/work/${item.id}`}>
              <a className="col-span-2">
                <Image
                  // loader={myLoader}
                  src={item.thumb.url}
                  width={700}
                  height={432}
                  alt="Picture of the author"
                />
              </a>
            </Link>

          </section>
        ))}
      </main> */}

      <Footer />

    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "content" });

  return {
    props: {
      data: data.contents,
    },
  };
};
