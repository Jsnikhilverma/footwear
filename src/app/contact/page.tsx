import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata = {
  title: "Contact Us | Premium Footwear Manufacturing",
  description:
    "Get in touch with our footwear manufacturing team for inquiries, quotes, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-yellow-100">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
              Get In Touch
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let us Discuss Your{" "}
              <span className="text-amber-600">Footwear Manufacturing</span>{" "}
              Needs
            </h1>
            <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl/relaxed">
              Whether you are looking for a manufacturing partner for your brand
              or have questions about our capabilities, our team is here to help
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Contact Information
                </h2>
                <p className="text-gray-500">
                  Reach out to us using the contact details below or fill out
                  the form to send us a message.
                </p>
              </div>

              <div className="grid gap-6 pt-4">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-amber-100 p-3">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Our Location</h3>
                      <p className="text-gray-500 mt-1">
                        Industrial Area, Phase 2<br />
                        Noida, Uttar Pradesh, India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone Number</h3>
                      <p className="text-gray-500 mt-1">+91 98765 43210</p>
                      <p className="text-gray-500">+91 12345 67890</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email Address</h3>
                      <p className="text-gray-500 mt-1">
                        info@footwearfactory.in
                      </p>
                      <p className="text-gray-500">sales@footwearfactory.in</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Working Hours</h3>
                      <p className="text-gray-500 mt-1">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-500">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative h-[300px] mt-8 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Map location of our factory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Send Us a Message
                </h2>
                <p className="text-gray-500">
                  Fill out the form below and we will get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="john.doe@example.com"
                    type="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="+91 98765 43210" type="tel" />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company Name
                  </label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="inquiry-type"
                    className="text-sm font-medium leading-none"
                  >
                    Inquiry Type
                  </label>
                  <Select>
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">
                        Manufacturing Partnership
                      </SelectItem>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="sample">Sample Request</SelectItem>
                      <SelectItem value="information">
                        General Information
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry or requirements..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
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
                services.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl grid gap-4 pt-12">
            {[
              {
                question: "What is your minimum order quantity (MOQ)?",
                answer:
                  "Our standard MOQ is 500 pairs per style. However, we can discuss options for smaller quantities for premium or specialized products.",
              },
              {
                question: "How long does it take to manufacture an order?",
                answer:
                  "Production time typically ranges from 30-60 days depending on order volume, complexity, and current production schedule. We provide a detailed timeline during the quotation process.",
              },
              {
                question: "Do you provide design and development services?",
                answer:
                  "Yes, we offer comprehensive design and development services. Our team can help bring your ideas to life or suggest improvements to your existing designs for optimal manufacturability.",
              },
              {
                question: "What quality control measures do you have in place?",
                answer:
                  "We implement a rigorous quality control system at every stage of production, from raw material inspection to final product checks. Our facility is ISO 9001:2015 certified, ensuring consistent quality standards.",
              },
              {
                question: "Can you provide samples before mass production?",
                answer:
                  "Yes, we provide pre-production samples for approval before beginning mass production. This allows for any necessary adjustments to ensure the final product meets your specifications.",
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
              Ready to Start Your Manufacturing Journey?
            </h2>
            <p className="text-white/90 md:text-xl/relaxed">
              Partner with us for premium footwear manufacturing solutions
              tailored to your brands needs.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/manufacturing-process">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 hover:text-amber-700">
                  Learn About Our Process
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-amber-700"
                >
                  View Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
