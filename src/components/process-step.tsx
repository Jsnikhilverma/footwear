import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  image,
  reverse = false,
}: ProcessStepProps) {
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardContent className="p-0">
        <div
          className={cn("grid md:grid-cols-2", reverse && "md:[direction:rtl]")}
        >
          <div className="relative h-64 md:h-auto">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center md:[direction:ltr]">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 text-amber-600 font-bold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                {number}
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
