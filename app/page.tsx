import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Cpu, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-primary text-background rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Custom Solutions, Proprietary Innovation</h1>
        <p className="text-xl mb-8">Empowering businesses with cutting-edge software solutions</p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-primary-bright hover:bg-primary-medium">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-background border-background hover:bg-primary-light">Learn More</Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-primary-light">
            <CardHeader>
              <CardTitle className="text-primary">TechInnovate CRM</CardTitle>
              <CardDescription>Streamline your customer relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Powerful CRM solution designed for modern businesses.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-background">Learn More</Button>
            </CardFooter>
          </Card>
          <Card className="border-primary-light">
            <CardHeader>
              <CardTitle className="text-primary">DataSync Pro</CardTitle>
              <CardDescription>Seamless data integration platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Connect and synchronize data across multiple platforms effortlessly.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-background">Learn More</Button>
            </CardFooter>
          </Card>
          <Card className="border-primary-light">
            <CardHeader>
              <CardTitle className="text-primary">SecureGuard</CardTitle>
              <CardDescription>Advanced cybersecurity solution</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Protect your business with our state-of-the-art security software.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-background">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Custom Software Services */}
      <section className="py-16 bg-primary-light rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-background">Custom Software Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center text-background">
            <Code className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
            <p>We develop custom software tailored to your unique business needs.</p>
          </div>
          <div className="text-center text-background">
            <Cpu className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cutting-edge Technology</h3>
            <p>Leveraging the latest technologies to build robust and scalable solutions.</p>
          </div>
          <div className="text-center text-background">
            <Users className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>Our experienced developers ensure high-quality deliverables.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/custom-software">
            <Button size="lg" className="bg-background text-primary hover:bg-primary-bright hover:text-background">
              Explore Custom Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Innovate?</h2>
        <p className="text-xl mb-8">Let's discuss how we can help transform your business with our software solutions.</p>
        <Button size="lg" className="bg-primary-bright text-background hover:bg-primary">
          Contact Us Today
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  );
}