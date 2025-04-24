import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

export function TeamMember({ name, position, image, bio }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-60 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} - ${position}`}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-amber-600 text-sm font-medium mb-3">{position}</p>
        <p className="text-gray-500 text-sm mb-4">{bio}</p>
        <div className="flex space-x-2">
          <a
            href="#"
            className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 transition-colors"
          >
            <Linkedin className="h-4 w-4 text-gray-600" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 transition-colors"
          >
            <Mail className="h-4 w-4 text-gray-600" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
