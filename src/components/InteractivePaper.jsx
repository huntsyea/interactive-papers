'use client';

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const InteractivePaper = ({ paperData }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [transitioning, setTransitioning] = useState(false);

  const tabs = ['Overview', 'Methodology', 'Experiments', 'Results', 'Insights', 'Quiz'];

  const AuthorPill = ({ name }) => (
    <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs mr-2 mb-2">
      {name}
    </span>
  );

  const renderContent = (section) => (
    <div className="space-y-4">
      {section.authorList && section.paperLink && (
        <Card>
          <CardHeader className="mb-2 pb-0">
            <h3 className="text-lg font-semibold">Details</h3>
          </CardHeader>
          <CardContent>
            <div className="">
              <span className="mb-2 font-semibold">Authors: </span>
              {section.authorList.map((author, index) => (
                <AuthorPill className="ml-1" key={index} name={author} />
              ))}
            </div>
            <span className="mb-2">Link: </span>
            <a
              href={section.paperLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {section.paperLink}
            </a>
          </CardContent>
        </Card>
      )}
      {section.summary && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Summary</h3>
          </CardHeader>
          <CardContent>
            <p>{section.summary}</p>
          </CardContent>
        </Card>
      )}
      {section.knowledge && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Key Points</h3>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {section.knowledge.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {section.content && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Summary</h3>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line">{section.content}</p>
          </CardContent>
        </Card>
      )}
      {section.keyTerms && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Lexicon</h3>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              {Object.entries(section.keyTerms).map(([term, definition], index) => (
                <div key={index}>
                  <dt className="font-semibold">{term}</dt>
                  <dd>{definition}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      )}
      {section.questions && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Quiz</h3>
          </CardHeader>
          <CardContent>
            {section.questions.map((q, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">{q.question}</p>
                <ul className="list-disc pl-5">
                  {q.options.map((option, optionIndex) => (
                    <li key={optionIndex}>{option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );

  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl pt-4 pb-4 font-serif text-center">{paperData.title}</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-4">
          <TabsList className="inline-flex bg-gray-100 p-1 rounded-full">
            {tabs.map(tab => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(paperData.content).map(([key, section]) => (
          <TabsContent key={key} value={key} className={`mt-4 ${transitioning ? 'tab-content' : ''}`}>
            {renderContent(section)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default InteractivePaper;
