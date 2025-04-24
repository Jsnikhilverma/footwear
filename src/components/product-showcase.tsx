"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const productCategories = [
  {
    id: "casual",
    name: "Casual Footwear",
    products: [
      {
        id: 1,
        name: "Casual Sneakers",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹1,199",
      },
      {
        id: 2,
        name: "Slip-On Loafers",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹999",
      },
      {
        id: 3,
        name: "Canvas Shoes",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹899",
      },
    ],
  },
  {
    id: "formal",
    name: "Formal Footwear",
    products: [
      {
        id: 4,
        name: "Oxford Shoes",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹1,499",
      },
      {
        id: 5,
        name: "Derby Shoes",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹1,399",
      },
      {
        id: 6,
        name: "Brogue Shoes",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹1,599",
      },
    ],
  },
  {
    id: "sports",
    name: "Sports Footwear",
    products: [
      {
        id: 7,
        name: "Running Shoes",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹1,299",
      },
      {
        id: 8,
        name: "Training Shoes",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹1,199",
      },
      {
        id: 9,
        name: "Walking Shoes",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹999",
      },
    ],
  },
  {
    id: "sandals",
    name: "Sandals & Slippers",
    products: [
      {
        id: 10,
        name: "Casual Sandals",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹699",
      },
      {
        id: 11,
        name: "Flip Flops",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹499",
      },
      {
        id: 12,
        name: "Sliders",
        image: "/placeholder.svg?height=400&width=400",
        price: "₹599",
      },
    ],
  },
];

export function ProductShowcase() {
  const [, setActiveTab] = useState("casual");

  return (
    <Tabs
      defaultValue="casual"
      className="w-full mt-8"
      onValueChange={setActiveTab}
    >
      <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
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
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-amber-600 font-medium mt-1 mb-4">
                    {product.price}
                  </p>
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
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
  );
}
