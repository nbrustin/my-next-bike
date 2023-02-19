import Bike from "./Bike";

export default async function Home() {
  const data = await fetch(`https://api.99spokes.com/v1/bikes?include=*`, {
    headers: {
      Authorization: "Bearer " + process.env.API_KEY,
    },
  });
  const res = await data.json();
  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
        <ul>
          {res.items.map((bike) => (
            <Bike
              key={bike.id}
              thumbnailUrl={bike.thumbnailUrl}
              maker={bike.maker}
              model={bike.model}
              year={bike.year}
              url={bike.url}
              id={bike.id}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
