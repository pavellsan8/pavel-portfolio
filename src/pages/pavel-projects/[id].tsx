import { useRouter } from "next/router";

export default function CardDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detail Project</h1>
      <p>ID Project: {id}</p>
      <a href="/pavel-projects">Kembali ke Daftar</a>
    </div>
  );
}
