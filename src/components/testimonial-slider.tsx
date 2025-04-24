"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rajiv Mehta",
    position: "Procurement Manager, Footwear Retail Ltd",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "We've been working with this manufacturer for over 5 years. Their commitment to quality and on-time delivery has been exceptional. They have been instrumental in helping us expand our product range.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Director of Operations, Global Footwear Brand",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Their manufacturing facility is world-class. The attention to detail and quality control measures in place ensure that we receive consistent quality with every order. A reliable partner indeed.",
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "CEO, Trendy Steps",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "From design development to final product, their team has been extremely supportive. Their ability to understand our requirements and translate them into high-quality footwear has been invaluable.",
  },
];

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative">
      <Card className="border-none shadow-lg bg-white">
        <CardContent className="p-8 md:p-12">
          <Quote className="h-12 w-12 text-amber-200 mb-6" />
          <div className="space-y-4">
            <p className="text-lg md:text-xl italic text-gray-700">
              {testimonials[current].content}
            </p>
            <div className="flex items-center pt-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-bold">{testimonials[current].name}</h4>
                <p className="text-sm text-gray-500">
                  {testimonials[current].position}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute -bottom-5 right-8 flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-white"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-white"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  );
}
