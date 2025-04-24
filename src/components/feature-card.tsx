import {
  CheckCircle,
  Truck,
  Settings,
  Users,
  Globe,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "CheckCircle":
        return <CheckCircle className="h-10 w-10 text-amber-600 mb-2" />;
      case "Truck":
        return <Truck className="h-10 w-10 text-amber-600 mb-2" />;
      case "Settings":
        return <Settings className="h-10 w-10 text-amber-600 mb-2" />;
      case "Users":
        return <Users className="h-10 w-10 text-amber-600 mb-2" />;
      case "Globe":
        return <Globe className="h-10 w-10 text-amber-600 mb-2" />;
      case "Shield":
        return <Shield className="h-10 w-10 text-amber-600 mb-2" />;
      default:
        return <CheckCircle className="h-10 w-10 text-amber-600 mb-2" />;
    }
  };

  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        {renderIcon(icon)}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
}
