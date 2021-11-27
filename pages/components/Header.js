import Link from "next/link";

export default function Header({ data }) {
  return (
    <header className="p-5">

      <div className="pt-5 pb-5 flex justify-between border-b-2 border-gray-100">
        <h1 className="font-semibold text-base">
          <Link href={"/"}>odashi.design</Link>
        </h1>
        <Link href={'about'}>
          <a className="text-sm">About</a>
        </Link>
      </div>

      <nav className="border-b-2 border-gray-100">
        {/* <ul className="flex justify-around">
          {data.map((data) => (
            <li key={data.id} className="mt-5 mb-5">
              <Link href={`/work/${data.id}`}>
                <a>
                  <p className="text-sm hover:opacity-50">{data.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul> */}
      </nav>
    </header>
  );
}
