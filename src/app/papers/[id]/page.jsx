// src/app/papers/[id]/page.js
import { getPaper, getAllPaperIds } from '@/lib/papersData'
import InteractivePaper from '@/components/InteractivePaper'
import { notFound } from 'next/navigation'

export default function PaperPage({ params }) {
  const paper = getPaper(params.id)

  if (!paper) {
    notFound()
  }

  return <InteractivePaper paperData={paper} />
}

export async function generateStaticParams() {
  const papers = getAllPaperIds()
  return papers.map((id) => ({
    id: id,
  }))
}