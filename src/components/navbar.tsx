"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Products",
      href: "/products",
      children: [
        {
          name: "Casual Footwear",
          href: "/products/casual",
          description: "Comfortable everyday casual shoes and sneakers",
        },
        {
          name: "Formal Footwear",
          href: "/products/formal",
          description:
            "Classic formal shoes for business and special occasions",
        },
        {
          name: "Sports Footwear",
          href: "/products/sports",
          description: "Performance sports shoes and athletic footwear",
        },
        {
          name: "Sandals & Slippers",
          href: "/products/sandals",
          description: "Comfortable sandals and slippers for leisure",
        },
      ],
    },
    {
      name: "Manufacturing",
      href: "/manufacturing-process",
      children: [
        {
          name: "Our Facility",
          href: "/manufacturing/facility",
          description: "Explore our state-of-the-art manufacturing facility",
        },
        {
          name: "Process",
          href: "/manufacturing/process",
          description: "Learn about our detailed manufacturing process",
        },
        {
          name: "Quality Control",
          href: "/manufacturing/quality-control",
          description: "Our rigorous quality control measures",
        },
        {
          name: "Capacity",
          href: "/manufacturing/capacity",
          description: "Our production capacity and capabilities",
        },
      ],
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50  border-b bg-background/80 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">FootwearCraft</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) =>
                route.children ? (
                  <NavigationMenuItem key={route.name}>
                    <NavigationMenuTrigger>{route.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {route.children.map((child) => (
                          <li key={child.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {child.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {child.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={route.name}>
                    <Link href={route.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === route.href &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        {route.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/contact">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Get A Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            {routes.map((route) => (
              <div key={route.name}>
                <Link
                  href={route.href}
                  className={cn(
                    "block py-2 hover:text-amber-600",
                    pathname === route.href && "font-medium text-amber-600"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
                {route.children && (
                  <div className="pl-4 mt-2 space-y-1 border-l">
                    {route.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-amber-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Get A Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
