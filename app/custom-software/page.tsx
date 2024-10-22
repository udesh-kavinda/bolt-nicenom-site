import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Code, Cog, Users } from 'lucide-react';

export default function CustomSoftwarePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Custom Software Development</h1>
      
      <section className="mb-16">
        <p className="text-xl mb-8 text-center">
          We specialize in creating bespoke software solutions tailored to your unique business needs.
          Our expert team works closely with you to design, develop, and deploy high-quality custom software.
        </p>
        <div className="flex justify-center">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6" />
                Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              We start by understanding your business needs and objectives.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-6 w-6" />
                Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              Our team creates a detailed design and architecture for your software.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Cog className="mr-2 h-6 w-6" />
                Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              We build your software using cutting-edge technologies and best practices.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-6 w-6" />
                Testing & Deployment
              </CardTitle>
            </CardHeader>
            <CardContent>
              Rigorous testing ensures quality before we deploy your solution.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['Healthcare', 'Finance', 'E-commerce', 'Education', 'Manufacturing', 'Logistics', 'Real Estate', 'Non-profit'].map((industry) => (
            <Card key={industry}>
              <CardHeader>
                <CardTitle className="text-center">{industry}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              Our team of skilled developers has years of experience in creating custom software solutions.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tailored Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              We create software that's specifically designed to address your unique business challenges.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ongoing Support</CardTitle>
            </CardHeader>
            <CardContent>
              We provide continuous support and maintenance to ensure your software remains effective.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Custom Software Project?</h2>
        <p className="text-xl mb-8">Contact us today to discuss your needs and get a free consultation.</p>
        <Button size="lg">
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  );
}