import Image from 'next/image'
import Header from './components/Header'

export default function About() {
  return (
    <>
      <Header />

      <main className="pt-40 text-main">
        <section className="max-w-2xl mx-auto flex flex-col items-center">
          <Image
            // loader={myLoader}
            src="/prof.jpeg"
            width={160}
            height={160}
            alt="顔写真"
            className="rounded-full"
          />
          <h1 className="mt-8 whitespace-nowrap text-2xl font-bold">小田島 慧</h1>
          <p>odahsima kei</p>
          <p className="mt-8 text-center">IT企業の5年目インハウスデザイナー。 <br />ストレングスファインダーの最上位資質は学習欲。性格診断は擁護者型 (ISFJ) 。 <br />業務はデザインから開発まで担当。写真の飲み物は麦茶。あだ名はおだし。</p>
        </section>
      </main>
    </>
  );
}
