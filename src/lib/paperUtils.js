// src/lib/paperUtils.js

export const initialPapers = [
  { 
    id: 'quantum-computing',
    title: "Interactive Paper on Quantum Computing",
    route: "/papers/quantum-computing"
  },
  { 
    id: '8bit-optimizers',
    title: "8-Bit Optimizers via Block-Wise Quantization",
    route: "/papers/8bit-optimizers"
  },
  // ... other papers
];

export const searchPapers = (papers, query) => {
  const lowercaseQuery = query.toLowerCase();
  return papers.filter(paper => 
    paper.title.toLowerCase().includes(lowercaseQuery)
  );
};

const paperData = {
  '8bit-optimizers': {
    title: "8-Bit Optimizers via Block-Wise Quantization",
    content: {
      overview: {
        authors: "Tim Dettmers, Mike Lewis, Sam Shleifer, Luke Zettlemoyer",
        summary: "This paper introduces 8-bit optimizers that maintain 32-bit performance while reducing memory usage by 75%. The authors develop block-wise dynamic quantization and a stable embedding layer to achieve this. The method is effective across various NLP and computer vision tasks.",
        knowledge: [
          "Stateful optimizers maintain gradient statistics over time.",
          "8-bit optimizers can significantly reduce memory footprint during training.",
          "Challenges in 8-bit optimization include quantization accuracy, computational efficiency, and large-scale stability."
        ],
        keyTerms: {
          "8-bit optimizer": "An optimization algorithm that uses 8-bit precision for its internal states",
          "Block-wise quantization": "A technique that divides input tensors into smaller blocks for independent quantization",
          "Dynamic quantization": "A non-linear quantization method precise for both large and small magnitude values",
          "Stable embedding layer": "A variation of word embedding layer that supports aggressive quantization"
        }
      },
      // ... other sections (methodology, experiments, results, insights, quiz)
    }
  },
  // ... other papers' data
};

export const getPaperData = (id) => paperData[id];