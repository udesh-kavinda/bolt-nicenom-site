"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we create and maintain software.',
    date: '2023-05-15',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Best Practices for Secure Software Development',
    excerpt: 'Learn about the latest security measures to implement in your software development lifecycle.',
    date: '2023-05-10',
    category: 'Security',
  },
  {
    id: 3,
    title: 'Optimizing Performance in Web Applications',
    excerpt: 'Discover techniques to improve the speed and efficiency of your web-based software.',
    date: '2023-05-05',
    category: 'Web Development',
  },
  {
    id: 4,
    title: 'The Rise of Low-Code Platforms',
    excerpt: 'Understand the growing trend of low-code development and its impact on the software industry.',
    date: '2023-04-30',
    category: 'Industry Trends',
  },
  {
    id: 5,
    title: 'Implementing Microservices Architecture',
    excerpt: 'A comprehensive guide to designing and deploying microservices in your software projects.',
    date: '2023-04-25',
    category: 'Architecture',
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">TechInnovate Blog</h1>
      
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date} | {post.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-lg mt-8">No posts found. Try a different search term.</p>
      )}

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-8">Subscribe to our newsletter for the latest insights and updates.</p>
        <div className="flex justify-center items-center space-x-4">
          <Input type="email" placeholder="Enter your email" className="max-w-xs" />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  );
}