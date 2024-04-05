async function getData() {
  const res = await fetch("https://fe29.sekiro.workers.dev/", {
    headers:{
      ContentType: "application/json"
    }
  });
  // const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function About() {
  const data = await getData();
  return (
    <div className="w-full h-[100vh]">
      About
      <pre>
        {data.forms}
      </pre>
    </div>
  );
}
