import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome TO HomePage</h1>
      <ul>
        <li>
          <Link href="./portfolio">Portfolio</Link>
          <br />
          <Link href="./client">Clients</Link>
        </li>
      </ul>
    </div>
  );
}
