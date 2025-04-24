import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductShowcase } from "@/components/product-showcase";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ClientsSection } from "@/components/clients-section";
import { FeatureCard } from "@/components/feature-card";

export default function Home() {
  return (
    <div className="flex  flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-yellow-100">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Premium Footwear Manufacturer in India
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Quality Footwear{" "}
                <span className="text-amber-600">Manufacturing</span> Solutions
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With over 20 years of experience, we craft premium footwear for
                global brands with precision, quality, and timely delivery.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Get A Quote
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Modern footwear manufacturing facility"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Excellence in Every Step
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our state-of-the-art manufacturing facility and expert
                craftsmanship ensure premium quality footwear production.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <FeatureCard
              icon="CheckCircle"
              title="Quality Assurance"
              description="Rigorous quality control at every stage of production"
            />
            <FeatureCard
              icon="Truck"
              title="Timely Delivery"
              description="Efficient processes to ensure on-time delivery of orders"
            />
            <FeatureCard
              icon="Settings"
              title="Advanced Machinery"
              description="State-of-the-art equipment for precision manufacturing"
            />
            <FeatureCard
              icon="Users"
              title="Skilled Workforce"
              description="Experienced craftsmen with attention to detail"
            />
            <FeatureCard
              icon="Globe"
              title="Global Standards"
              description="Compliance with international quality standards"
            />
            <FeatureCard
              icon="Shield"
              title="Ethical Practices"
              description="Sustainable manufacturing with fair labor practices"
            />
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Products
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Premium Footwear Collections
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From casual to formal, we manufacture a wide range of footwear
                to meet diverse market needs.
              </p>
            </div>
          </div>
          <ProductShowcase />
          <div className="mt-12 text-center">
            <Link href="/products">
              <Button variant="outline" className="group">
                View All Collections
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                State-of-the-Art Manufacturing
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our manufacturing process combines cutting-edge technology with
                traditional craftsmanship to create premium quality footwear.
              </p>
              <ul className="space-y-2">
                {[
                  "Design and Development",
                  "Material Selection",
                  "Cutting and Stitching",
                  "Assembly and Lasting",
                  "Quality Control",
                  "Packaging and Shipping",
                ].map((step, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/manufacturing-process">
                  <Button variant="outline">
                    Learn More About Our Process
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Footwear manufacturing process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Do not just take our word for it. Hear from our satisfied
                clients around the world.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Clients
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Trusted by Global Brands
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We manufacture footwear for leading brands across the globe.
              </p>
            </div>
          </div>
          <ClientsSection />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 bg-amber-600">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Manufacture Quality Footwear?
            </h2>
            <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Partner with us for premium footwear manufacturing solutions
              tailored to your brands needs.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/contact">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 hover:text-amber-700">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-amber-700"
                >
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2 p-4">
              <div className="rounded-full bg-amber-100 p-3">
                <Phone className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p>+91 98765 43210</p>
              <p>Mon-Sat, 9AM-6PM IST</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4">
              <div className="rounded-full bg-amber-100 p-3">
                <Mail className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p>info@footwearfactory.in</p>
              <p>sales@footwearfactory.in</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4">
              <div className="rounded-full bg-amber-100 p-3">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p>Industrial Area, Phase 2</p>
              <p>Noida, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
