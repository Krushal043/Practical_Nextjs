import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
    function projectHandleSubmit(){
        router.push({
            pathname: "/client/[id]/[clientprojectid]",
            query: { id: 'devil' ,clientprojectid : 'Project-A'},
          })
    }
  return (
    <div>
      <h1>This is ClientProjectPage</h1>
      <button onClick={projectHandleSubmit}>Load Project A</button>
    </div>
  );
}
