import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata = {
  title: "Our Products | Premium Footwear Manufacturing",
  description:
    "Explore our wide range of premium footwear products manufactured with the highest quality standards and craftsmanship.",
};

export default function ProductsPage() {
  const productCategories = [
    { id: "all", name: "All Products" },
    { id: "casual", name: "Casual Footwear" },
    { id: "formal", name: "Formal Footwear" },
    { id: "sports", name: "Sports Footwear" },
    { id: "sandals", name: "Sandals & Slippers" },
  ];

  const products = [
    {
      id: 1,
      name: "Classic Oxford Shoes",
      category: "formal",
      image: "/placeholder.svg?height=400&width=400",
      isPopular: true,
    },
    {
      id: 2,
      name: "Casual Sneakers",
      category: "casual",
      image: "/placeholder.svg?height=400&width=400",
      isPopular: true,
    },
    {
      id: 3,
      name: "Leather Loafers",
      category: "formal",
      image: "/placeholder.svg?height=400&width=400",
      isNew: true,
    },
    {
      id: 4,
      name: "Running Shoes",
      category: "sports",
      image: "/placeholder.svg?height=400&width=400",
      isNew: true,
    },
    {
      id: 5,
      name: "Comfortable Slippers",
      category: "sandals",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      name: "Canvas Shoes",
      category: "casual",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 7,
      name: "Derby Shoes",
      category: "formal",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 8,
      name: "Training Shoes",
      category: "sports",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 9,
      name: "Flip Flops",
      category: "sandals",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 10,
      name: "Slip-On Shoes",
      category: "casual",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 11,
      name: "Brogue Shoes",
      category: "formal",
      image: "/placeholder.svg?height=400&width=400",
      isPopular: true,
    },
    {
      id: 12,
      name: "Walking Shoes",
      category: "sports",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-yellow-100">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
              Our Products
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Premium <span className="text-amber-600">Footwear</span>{" "}
              Collections
            </h1>
            <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl/relaxed">
              Explore our wide range of high-quality footwear manufactured with
              precision craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Product Catalog
              </h2>
              <p className="text-gray-500">
                Browse our comprehensive range of footwear products
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm md:text-base"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products
                    .filter(
                      (product) =>
                        category.id === "all" ||
                        product.category === category.id
                    )
                    .map((product) => (
                      <Card
                        key={product.id}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="relative">
                          <div className="relative h-64 w-full">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {product.isNew && (
                            <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
                              New
                            </Badge>
                          )}
                          {product.isPopular && !product.isNew && (
                            <Badge className="absolute top-3 right-3 bg-amber-500 hover:bg-amber-600">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold">{product.name}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1 mb-4">
                            <Link
                              href={`/products/${product.category}`}
                              className="flex items-center hover:text-amber-600"
                            >
                              {
                                productCategories.find(
                                  (cat) => cat.id === product.category
                                )?.name
                              }
                              <ChevronRight className="h-3 w-3 ml-1" />
                            </Link>
                          </div>
                          <Link href={`/products/${product.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                            >
                              View Details
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Manufacturing Capability Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Manufacturing Capabilities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Crafting Excellence in Every Pair
              </h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our state-of-the-art manufacturing facility is equipped with
                advanced machinery and staffed by skilled craftsmen to produce
                footwear of the highest quality. We can handle various types of
                materials and construction techniques to meet your specific
                requirements.
              </p>
              <ul className="space-y-2 pt-4">
                {[
                  "Advanced machinery for precision manufacturing",
                  "Skilled workforce with decades of experience",
                  "Ability to work with various materials including leather, synthetic, textile",
                  "Multiple construction techniques including cemented, stitched, and vulcanized",
                  "Rigorous quality control at every stage of production",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <ArrowRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/manufacturing-process">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Learn More About Our Process
                  </Button>
                </Link>
              </div>
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
        </div>
      </section>

      {/* Custom Manufacturing Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Custom Manufacturing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Bring Your Footwear Vision to Life
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Beyond our standard collections, we offer custom manufacturing
                services to bring your unique footwear designs to life.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Design & Development"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Design & Development</h3>
                <p className="text-gray-500">
                  Our expert designers work with you to refine concepts and
                  create technical specifications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sampling & Prototyping"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Sampling & Prototyping
                </h3>
                <p className="text-gray-500">
                  We create high-quality prototypes for your approval before
                  beginning mass production.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Production & Delivery"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Production & Delivery
                </h3>
                <p className="text-gray-500">
                  Efficient production processes ensure timely delivery of
                  high-quality finished products.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Request Custom Manufacturing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 bg-amber-600">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Discuss Your Footwear Requirements?
            </h2>
            <p className="text-white/90 md:text-xl/relaxed">
              Our team is ready to assist you with all your footwear
              manufacturing needs.
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
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
