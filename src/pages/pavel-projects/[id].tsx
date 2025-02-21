import { useRouter } from 'next/router'

export default function ProjectDetailPage() {
  const router = useRouter()
  const { id } = router.query

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Project Detail Page</h1>
      <p>Showing details for project ID: {id}</p>
    </div>
  );
}