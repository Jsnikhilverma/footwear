import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  Users,
  History,
  Target,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";
import { TeamMember } from "@/components/team-member";

export const metadata = {
  title: "About Us | Premium Footwear Manufacturing",
  description:
    "Learn about our footwear manufacturing company, our history, values, and the team behind our premium quality footwear production.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-yellow-100">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                About Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                20+ Years of Excellence in{" "}
                <span className="text-amber-600">Footwear Manufacturing</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                We are a leading footwear manufacturer in India with
                state-of-the-art facilities and a team of skilled professionals
                dedicated to crafting premium quality footwear for global
                brands.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Our manufacturing facility"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                From Small Workshop to Industry Leader
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our journey from a small workshop to becoming one of India is
                leading footwear manufacturers.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl pt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Crafting Excellence with Every Step
              </h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our mission is to manufacture premium quality footwear that
                exceeds customer expectations while maintaining sustainable
                practices and ethical standards. We strive to combine
                traditional craftsmanship with modern technology to deliver
                footwear that stands out in terms of comfort, durability, and
                style.
              </p>
              <ul className="space-y-2 pt-4">
                {[
                  "Deliver exceptional quality in every product",
                  "Maintain sustainable and ethical manufacturing practices",
                  "Innovate continuously to improve designs and processes",
                  "Provide a safe and nurturing work environment for our team",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Setting Global Standards in Footwear
              </h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                We envision becoming the most trusted and preferred footwear
                manufacturing partner for global brands by consistently
                delivering superior quality products, innovative designs, and
                exceptional service. We aim to be at the forefront of
                sustainable manufacturing practices in the footwear industry.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Target className="h-10 w-10 text-amber-600 mb-2" />
                    <h3 className="font-bold">Global Reach</h3>
                    <p className="text-sm text-gray-500">
                      Expanding our presence in international markets
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <History className="h-10 w-10 text-amber-600 mb-2" />
                    <h3 className="font-bold">Innovation</h3>
                    <p className="text-sm text-gray-500">
                      Pioneering new technologies and designs
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Clock className="h-10 w-10 text-amber-600 mb-2" />
                    <h3 className="font-bold">Efficiency</h3>
                    <p className="text-sm text-gray-500">
                      Streamlining processes for faster delivery
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Award className="h-10 w-10 text-amber-600 mb-2" />
                    <h3 className="font-bold">Excellence</h3>
                    <p className="text-sm text-gray-500">
                      Maintaining the highest quality standards
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Principles That Guide Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values shape our approach to business, manufacturing,
                and relationships.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-sm text-gray-500">
                  We never compromise on the quality of our products, materials,
                  or processes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-sm text-gray-500">
                  We conduct our business with honesty, transparency, and
                  ethical practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-4">
                  <Target className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-sm text-gray-500">
                  We continuously seek new ways to improve our products and
                  processes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Commitment</h3>
                <p className="text-sm text-gray-500">
                  We are dedicated to meeting our clients needs and exceeding
                  their expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet the People Behind Our Success
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our diverse team of experts brings together decades of
                experience in the footwear industry.
              </p>
            </div>
          </div>

          <Tabs defaultValue="leadership" className="mx-auto max-w-5xl">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
              <TabsTrigger value="production">Production Team</TabsTrigger>
              <TabsTrigger value="design">Design Team</TabsTrigger>
            </TabsList>
            <TabsContent value="leadership" className="mt-0">
              <div className="grid gap-6 md:grid-cols-3">
                <TeamMember
                  name="Rajesh Sharma"
                  position="CEO & Founder"
                  image="/placeholder.svg?height=300&width=300"
                  bio="With over 25 years in the footwear industry, Rajesh has led the company from a small workshop to a global manufacturing leader."
                />
                <TeamMember
                  name="Priya Patel"
                  position="COO"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Priya oversees all operations and has been instrumental in implementing efficient processes and quality standards."
                />
                <TeamMember
                  name="Amit Kumar"
                  position="CTO"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Amit leads technological innovations, ensuring our manufacturing processes are at the cutting edge of the industry."
                />
              </div>
            </TabsContent>
            <TabsContent value="production" className="mt-0">
              <div className="grid gap-6 md:grid-cols-3">
                <TeamMember
                  name="Vikram Singh"
                  position="Production Manager"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Vikram oversees the daily production operations, ensuring efficiency and adherence to quality standards."
                />
                <TeamMember
                  name="Sunita Rao"
                  position="Quality Control Head"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Sunita leads our quality control team, implementing rigorous testing protocols at every stage of production."
                />
                <TeamMember
                  name="Ramesh Gupta"
                  position="Master Craftsman"
                  image="/placeholder.svg?height=300&width=300"
                  bio="With 30 years of experience, Ramesh trains our craftsmen and oversees specialty product manufacturing."
                />
              </div>
            </TabsContent>
            <TabsContent value="design" className="mt-0">
              <div className="grid gap-6 md:grid-cols-3">
                <TeamMember
                  name="Neha Joshi"
                  position="Head of Design"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Neha leads our design team, staying ahead of global trends while creating unique and comfortable footwear designs."
                />
                <TeamMember
                  name="Karan Mehta"
                  position="Technical Designer"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Karan specializes in translating designs into technical specifications that ensure both style and comfort."
                />
                <TeamMember
                  name="Deepa Sharma"
                  position="Material Specialist"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Deepa sources and tests materials, ensuring they meet our quality standards and sustainability goals."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full py-12 md:py-24 bg-white">
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
                Our facility and processes are certified by leading global
                standards organizations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              "ISO 9001:2015",
              "ISO 14001:2015",
              "SA8000",
              "OEKO-TEX® Standard 100",
            ].map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-amber-100 p-3 mb-4">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold">{cert}</h3>
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
              Ready to Partner with a Leading Manufacturer?
            </h2>
            <p className="text-white/90 md:text-xl/relaxed">
              Let us discuss how we can bring your footwear designs to life with
              our expertise.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/contact">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 hover:text-amber-700">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/manufacturing-process">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-amber-700"
                >
                  Learn More About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
