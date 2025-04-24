import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Settings, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProcessStep } from "@/components/process-step";

export const metadata = {
  title: "Manufacturing Process | Premium Footwear Manufacturing",
  description:
    "Learn about our comprehensive footwear manufacturing process, from design and development to quality control and shipping.",
};

export default function ManufacturingProcessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-yellow-100">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Process
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                State-of-the-Art{" "}
                <span className="text-amber-600">Manufacturing</span> Process
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Our comprehensive manufacturing process combines traditional
                craftsmanship with modern technology to create premium quality
                footwear that meets global standards.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Manufacturing process"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Process Overview
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                From Concept to Finished Product
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our manufacturing process consists of six key stages that ensure
                the highest quality footwear production.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl pt-12">
            <div className="grid gap-8">
              <ProcessStep
                number="01"
                title="Design and Development"
                description="Our design team works closely with clients to develop footwear concepts, create technical specifications, and prepare for production."
                image="/placeholder.svg?height=400&width=600"
              />

              <ProcessStep
                number="02"
                title="Material Selection and Sourcing"
                description="We carefully select and source high-quality materials that meet our rigorous standards for durability, comfort, and aesthetics."
                image="/placeholder.svg?height=400&width=600"
                reverse
              />

              <ProcessStep
                number="03"
                title="Cutting and Preparation"
                description="Materials are precisely cut according to patterns, and components are prepared for assembly using both automated machinery and skilled handwork."
                image="/placeholder.svg?height=400&width=600"
              />

              <ProcessStep
                number="04"
                title="Stitching and Assembly"
                description="Skilled craftsmen stitch components together and begin the assembly process, bringing the footwear design to life."
                image="/placeholder.svg?height=400&width=600"
                reverse
              />

              <ProcessStep
                number="05"
                title="Lasting and Sole Attachment"
                description="The upper is shaped on a last and attached to the sole using appropriate methods such as cementing, stitching, or vulcanization."
                image="/placeholder.svg?height=400&width=600"
              />

              <ProcessStep
                number="06"
                title="Quality Control and Finishing"
                description="Every pair undergoes rigorous quality checks before final finishing touches are applied and the footwear is prepared for packaging and shipping."
                image="/placeholder.svg?height=400&width=600"
                reverse
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Facility
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                State-of-the-Art Manufacturing Facility
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our 100,000 sq. ft. facility is equipped with the latest
                technology and machinery to ensure efficient and high-quality
                production.
              </p>
            </div>
          </div>

          <Tabs defaultValue="facility" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="facility">Facility Overview</TabsTrigger>
              <TabsTrigger value="machinery">Machinery</TabsTrigger>
              <TabsTrigger value="capacity">Production Capacity</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            </TabsList>

            <TabsContent value="facility" className="mt-0">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    Modern Production Facility
                  </h3>
                  <p className="text-gray-500">
                    Our manufacturing facility spans 100,000 square feet and is
                    designed for efficient workflow and optimal production
                    conditions. The facility includes dedicated areas for each
                    stage of the manufacturing process, ensuring smooth
                    operations and consistent quality.
                  </p>
                  <ul className="space-y-2 pt-4">
                    {[
                      "Strategically located in Noida's industrial area",
                      "Climate-controlled environment for optimal production conditions",
                      "Ergonomically designed workstations for employee comfort and productivity",
                      "Separate zones for different manufacturing processes",
                      "Dedicated quality control area with specialized testing equipment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Our manufacturing facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="machinery" className="mt-0">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Advanced Machinery</h3>
                  <p className="text-gray-500">
                    Our facility is equipped with the latest technology and
                    machinery from leading global manufacturers. This advanced
                    equipment allows us to maintain high precision, efficiency,
                    and quality in our manufacturing process.
                  </p>
                  <ul className="space-y-2 pt-4">
                    {[
                      "Computer-controlled cutting machines for precision and minimal waste",
                      "Advanced stitching machines for various seam types and materials",
                      "Specialized lasting equipment for different footwear constructions",
                      "Automated sole attaching machinery for consistent bonding",
                      "Heat setting equipment for shape retention and durability",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Settings className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Advanced machinery in our facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="capacity" className="mt-0">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Production Capacity</h3>
                  <p className="text-gray-500">
                    With our current facility and workforce, we have the
                    capacity to produce a significant volume of footwear while
                    maintaining our commitment to quality and craftsmanship.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <Card>
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="text-3xl font-bold text-amber-600">
                          1M+
                        </div>
                        <p className="text-gray-500">Pairs annually</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="text-3xl font-bold text-amber-600">
                          4,000+
                        </div>
                        <p className="text-gray-500">Pairs daily</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="text-3xl font-bold text-amber-600">
                          500+
                        </div>
                        <p className="text-gray-500">Skilled employees</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="text-3xl font-bold text-amber-600">
                          20+
                        </div>
                        <p className="text-gray-500">Production lines</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Production line in our facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sustainability" className="mt-0">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    Sustainable Manufacturing
                  </h3>
                  <p className="text-gray-500">
                    We are committed to sustainable manufacturing practices that
                    minimize environmental impact while maintaining the highest
                    quality standards. Our facility incorporates various
                    eco-friendly initiatives.
                  </p>
                  <ul className="space-y-2 pt-4">
                    {[
                      "Solar panels to reduce dependency on conventional energy",
                      "Water recycling system to minimize water usage",
                      "Eco-friendly materials and adhesives where possible",
                      "Waste reduction and recycling programs",
                      "Energy-efficient machinery and lighting throughout the facility",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Sustainable practices in our facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-xl order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Quality control process"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Quality Control
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Rigorous Quality Assurance
              </h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Quality is at the heart of our manufacturing process. We
                implement comprehensive quality control measures at every stage
                of production to ensure that each pair of footwear meets our
                strict standards.
              </p>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Raw Material Inspection</h3>
                  <p className="text-gray-500">
                    All incoming materials undergo thorough inspection for
                    quality, color consistency, and compliance with
                    specifications.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">In-Process Checks</h3>
                  <p className="text-gray-500">
                    Quality checks are performed at each stage of production to
                    identify and address any issues immediately.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Final Inspection</h3>
                  <p className="text-gray-500">
                    Each pair undergoes a comprehensive final inspection for
                    appearance, comfort, durability, and overall quality.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Testing Laboratory</h3>
                  <p className="text-gray-500">
                    Our in-house testing lab conducts various tests including
                    slip resistance, flex durability, and material strength.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/quality-control">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Learn More About Quality Control
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Certifications
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meeting Global Standards
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our manufacturing processes and facility are certified by
                leading international standards organizations.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "ISO 9001:2015",
                description: "Quality Management System",
              },
              {
                name: "ISO 14001:2015",
                description: "Environmental Management System",
              },
              { name: "SA8000", description: "Social Accountability Standard" },
              {
                name: "OEKO-TEX® Standard 100",
                description: "Tested for harmful substances",
              },
            ].map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-amber-100 p-3 mb-4">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                FAQs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our manufacturing
                process.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl grid gap-4 pt-12">
            {[
              {
                question: "What is your production lead time?",
                answer:
                  "Our standard production lead time is 30-60 days from order confirmation, depending on order quantity and complexity. We provide a detailed timeline during the quotation process.",
              },
              {
                question: "Can you handle small order quantities?",
                answer:
                  "While our standard MOQ is 500 pairs per style, we can accommodate smaller quantities for premium products or during the sampling and development phase.",
              },
              {
                question: "What materials can you work with?",
                answer:
                  "We work with a wide range of materials including various types of leather, synthetic materials, textiles, mesh, canvas, and eco-friendly alternatives.",
              },
              {
                question: "What construction methods do you offer?",
                answer:
                  "We can produce footwear using various construction methods including cemented, stitched, vulcanized, and injection molded, depending on the design requirements.",
              },
              {
                question: "Do you provide design and development services?",
                answer:
                  "Yes, our experienced design team can help develop your concepts into production-ready designs or suggest improvements to existing designs for better manufacturability.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <p className="text-gray-500 mt-2">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 bg-amber-600">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Manufacture Premium Footwear?
            </h2>
            <p className="text-white/90 md:text-xl/relaxed">
              Partner with us for high-quality footwear manufacturing solutions
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
    </div>
  );
}
