import Link from "next/link";

export default function ClientPage() {
  const clients = [
    { id: "devil", name: "Kushal-Sojitra" },
    { id: "Zalak", name: "Zalak-Sojitra" },
  ];

  return (
    <div>
      <h1>This is ClientPage</h1>
      {clients.map((client) => (
        <li key={client.id}>
          <Link
            href={{
              pathname: "/client/[id]",
              query: { id: client.id },
            }}
          >
            {client.name}
          </Link>
        </li>
      ))}
    </div>
  );
}
