// src/components/PaperCard.js
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from 'next/navigation'

export const PaperCard = ({ paper }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(paper.route);
  };

  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-2">{paper.title}</h2>
        <p className="text-gray-600">Click to view interactive paper</p>
      </CardContent>
    </Card>
  );
};