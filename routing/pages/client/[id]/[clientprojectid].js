import { useRouter } from "next/router";

export default function ClientProjectId() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>This is ClientProjectId</h1>
    </div>
  );
}
