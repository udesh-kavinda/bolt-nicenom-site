"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'TechInnovate CRM',
    description: 'Streamline your customer relationships with our powerful CRM solution.',
    features: ['Contact Management', 'Sales Pipeline', 'Reporting & Analytics', 'Email Integration'],
    pricing: 'Starting at $49/month',
  },
  {
    id: 2,
    name: 'DataSync Pro',
    description: 'Seamlessly integrate and synchronize data across multiple platforms.',
    features: ['Real-time Sync', 'Custom Integrations', 'Data Mapping', 'Error Handling'],
    pricing: 'Starting at $99/month',
  },
  {
    id: 3,
    name: 'SecureGuard',
    description: 'Advanced cybersecurity solution to protect your business from threats.',
    features: ['Threat Detection', 'Firewall Protection', 'Encryption', '24/7 Monitoring'],
    pricing: 'Starting at $79/month',
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' ? products : products.filter(product => product.name.toLowerCase().includes(activeTab));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All</TabsTrigger>
          <TabsTrigger value="crm" onClick={() => setActiveTab('crm')}>CRM</TabsTrigger>
          <TabsTrigger value="data" onClick={() => setActiveTab('data')}>Data</TabsTrigger>
          <TabsTrigger value="security" onClick={() => setActiveTab('security')}>Security</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 mb-4">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="font-semibold">{product.pricing}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Learn More</Button>
              <Button>
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}