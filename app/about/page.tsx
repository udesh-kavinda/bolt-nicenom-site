import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About TechInnovate Solutions</h1>
      
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Team working together"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At TechInnovate Solutions, we are dedicated to empowering businesses through innovative software solutions. Our mission is to deliver cutting-edge technology that drives growth, efficiency, and success for our clients.
            </p>
            <p className="text-lg mb-4">
              We believe in the power of technology to transform businesses and improve lives. Our team of expert developers, designers, and strategists work tirelessly to create custom software solutions and proprietary products that meet the unique needs of our diverse clientele.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              We constantly push the boundaries of what's possible in software development, embracing new technologies and methodologies.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quality</CardTitle>
            </CardHeader>
            <CardContent>
              We are committed to delivering high-quality solutions that exceed our clients' expectations and stand the test of time.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              We believe in the power of teamwork and partner closely with our clients to ensure their vision becomes reality.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'John Doe', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
            { name: 'Jane Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80' },
            { name: 'Mike Johnson', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
          ].map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-center">{member.name}</CardTitle>
                <CardDescription className="text-center">{member.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-xl mb-8">We're always looking for talented individuals to join our growing team.</p>
        <Button size="lg">
          View Career Opportunities
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  );
}