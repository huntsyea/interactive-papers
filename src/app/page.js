'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { getAllPaperIds, getPaper } from '@/lib/papersData'
import { SearchInput } from '@/components/SearchInput'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const allPaperIds = getAllPaperIds()
  const [filteredPaperIds, setFilteredPaperIds] = useState(allPaperIds)

  const trimWords = (text, wordLimit) => {
    const words = text.split(' ')
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'
    }
    return text
  }

  const handleSearch = useCallback((event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = allPaperIds.filter(id => {
      const paper = getPaper(id)
      return paper.title.toLowerCase().includes(query) ||
             paper.content.overview.authorList.includes(query)
    })
    setFilteredPaperIds(filtered)
  }, [allPaperIds])

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-6xl font-serif text-center">Interactive Papers</h1>
      </header>
      
      <div className="max-w-md mx-auto mb-12">
        <SearchInput value={searchQuery} onChange={handleSearch} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPaperIds.map((id) => {
          const paper = getPaper(id)
          return (
            <Link key={id} href={`/papers/${id}`}>
              <Card className="h-full min-h-20 transition-all ease-in-out duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold mb-2">{paper.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-0 pb-0">
                  {paper.content.overview.paperLink}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">{trimWords(paper.content.overview.summary, 20)}</p>
                </CardContent>
              </Card>
          </Link>
    
          )
        })}
      </div>

      {filteredPaperIds.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No papers found matching your search.</p>
      )}
    </div>
  )
}