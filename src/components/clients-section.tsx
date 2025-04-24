import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function ClientsSection() {
  const clients = [
    { id: 1, name: "Client 1", logo: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Client 2", logo: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Client 3", logo: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Client 4", logo: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "Client 5", logo: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Client 6", logo: "/placeholder.svg?height=200&width=200" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-8">
      {clients.map((client) => (
        <Card
          key={client.id}
          className="border-none shadow-sm hover:shadow-md transition-shadow"
        >
          <CardContent className="flex items-center justify-center p-6">
            <div className="relative h-16 w-full">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
