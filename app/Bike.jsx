import Link from "next/link";
import Image from "next/image";

export default function Bike({ thumbnailUrl, maker, model, year, url, id }) {
  return (
    <div>
      <h1>{maker}</h1>
      <h2>{model}</h2>
      <h2>{year}</h2>
      <Link href={`/${id}`}>
        <Image src={thumbnailUrl} width={400} height={400} alt={id} priority />
      </Link>
    </div>
  );
}
