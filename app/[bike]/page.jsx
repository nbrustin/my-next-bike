import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(`https://api.99spokes.com/v1/bikes?include=*`, {
    headers: {
      Authorization: "Bearer " + process.env.API_KEY,
    },
  });

  const res = await data.json();

  return res.items.map((bike) => ({
    bike: toString(bike.id),
  }));
}

export default async function BikeDetail({ params }) {
  //what is this params business?
  const { bike } = params;
  const data = await fetch(
    `https://api.99spokes.com/v1/bikes/${bike}?include=*`,
    {
      headers: {
        Authorization: "Bearer " + process.env.API_KEY,
      },
    }
  );

  const res = await data.json();

  return (
    <div>
      <div className="">
        <h2 className="text-4xl">{res.maker}</h2>
        <h2 className="text-4xl">{res.model}</h2>
        <h2 className="text-4xl">{res.year}</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
          {res.family}
        </h2>
        <Link href={res.url} target="_blank">
          <Image
            className="my-12 w-full"
            src={res.thumbnailUrl}
            alt={res.id}
            width={500}
            height={500}
            priority
          />
        </Link>
      </div>
      <div className="my-4">
        {/* <p className="text-lg">{res.overview}</p> */}
      </div>
    </div>
  );
}
