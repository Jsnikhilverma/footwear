import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata = {
  title: "Blog | Premium Footwear Manufacturing",
  description:
    "Stay updated with the latest news, trends, and insights in the footwear manufacturing industry.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Sustainable Footwear Manufacturing",
      excerpt:
        "Explore how eco-friendly materials and processes are transforming the footwear industry for a more sustainable future.",
      image: "/placeholder.svg?height=600&width=800",
      date: "June 15, 2023",
      author: "Priya Sharma",
      readTime: "5 min read",
      category: "Sustainability",
    },
    {
      id: 2,
      title: "Innovations in Athletic Footwear Technology",
      excerpt:
        "Discover the latest technological advancements that are revolutionizing the performance and comfort of athletic footwear.",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 28, 2023",
      author: "Rajesh Kumar",
      readTime: "7 min read",
      category: "Technology",
    },
    {
      id: 3,
      title:
        "Leather vs. Synthetic: Choosing the Right Material for Your Footwear",
      excerpt:
        "A comprehensive comparison of leather and synthetic materials for different types of footwear applications.",
      image: "/placeholder.svg?height=600&width=800",
      date: "April 12, 2023",
      author: "Amit Singh",
      readTime: "6 min read",
      category: "Materials",
    },
    {
      id: 4,
      title: "Quality Control in Footwear Manufacturing: Best Practices",
      excerpt:
        "Learn about the essential quality control measures that ensure the production of high-quality, durable footwear.",
      image: "/placeholder.svg?height=600&width=800",
      date: "March 20, 2023",
      author: "Neha Joshi",
      readTime: "8 min read",
      category: "Quality",
    },
    {
      id: 5,
      title: "Trends Shaping the Future of Footwear Design",
      excerpt:
        "An insight into the emerging design trends that are set to transform the footwear industry in the coming years.",
      image: "/placeholder.svg?height=600&width=800",
      date: "February 5, 2023",
      author: "Karan Mehta",
      readTime: "5 min read",
      category: "Design",
    },
    {
      id: 6,
      title: "The Importance of Ergonomics in Footwear Design",
      excerpt:
        "Understanding how ergonomic considerations in design can significantly improve comfort and foot health.",
      image: "/placeholder.svg?height=600&width=800",
      date: "January 18, 2023",
      author: "Sunita Rao",
      readTime: "6 min read",
      category: "Design",
    },
  ];

  const categories = [
    "All Categories",
    "Sustainability",
    "Technology",
    "Materials",
    "Quality",
    "Design",
    "Industry News",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-yellow-100">
        <div className="container max px-4 md:px-6 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
              Our Blog
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Insights & Updates from the{" "}
              <span className="text-amber-600">Footwear Industry</span>
            </h1>
            <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl/relaxed">
              Stay informed about the latest trends, innovations, and best
              practices in footwear manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4 md:mb-0">
                  Latest Articles
                </h2>
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-60 md:h-auto">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 flex flex-col">
                          <div className="mb-2">
                            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                              {post.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 mb-4">{post.excerpt}</p>
                          <div className="flex items-center text-sm text-gray-400 space-x-4 mt-auto">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Link href={`/blog/${post.id}`}>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-0 h-auto font-medium text-amber-600 hover:text-amber-700 hover:bg-transparent"
                              >
                                Read More{" "}
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-12 md:mt-0">
              <div className="space-y-8">
                {/* Search */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search articles..." className="pl-10" />
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/blog/category/${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block py-2 border-b border-gray-100 text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Stay updated with the latest trends, insights, and news in
                    the footwear industry.
                  </p>
                  <form className="space-y-3">
                    <Input placeholder="Your Email Address" type="email" />
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Featured
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Industry Insights
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive deeper into the world of footwear manufacturing with our
                curated insights.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "The Impact of Technology on Footwear Manufacturing",
                description:
                  "Explore how advanced technologies are transforming traditional manufacturing processes.",
                icon: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "Building a Sustainable Supply Chain",
                description:
                  "Learn how footwear manufacturers are implementing sustainable practices throughout their supply chains.",
                icon: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "Global Footwear Market Trends",
                description:
                  "Stay informed about the latest trends and developments in the global footwear market.",
                icon: "/placeholder.svg?height=100&width=100",
              },
            ].map((insight, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Image
                      src={insight.icon || "/placeholder.svg"}
                      alt={insight.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{insight.title}</h3>
                  <p className="text-gray-500 mb-4">{insight.description}</p>
                  <Link href="#">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-medium text-amber-600 hover:text-amber-700 hover:bg-transparent"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
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
              Want to Stay Updated?
            </h2>
            <p className="text-white/90 md:text-xl/relaxed">
              Subscribe to our newsletter for the latest insights and updates in
              the footwear industry.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your Email Address"
                type="email"
                className="bg-white"
              />
              <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
