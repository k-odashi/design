import Link from "next/link";

export default function Header({ data }) {
  return (
    <header className="p-5 w-full flex justify-between fixed z-10">

      <h1 className="font-semibold text-base">
        <Link href={"/"}>odashi.design</Link>
      </h1>
      <Link href={'/about'}>
        <a className="text-base">About</a>
      </Link>

    </header>
  );
}
