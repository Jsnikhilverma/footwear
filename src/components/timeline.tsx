import { Card, CardContent } from "@/components/ui/card";

export function Timeline() {
  const timelineEvents = [
    {
      year: "2002",
      title: "Humble Beginnings",
      description:
        "Started as a small workshop with just 10 craftsmen, producing handcrafted leather shoes.",
    },
    {
      year: "2007",
      title: "First Major Contract",
      description:
        "Secured our first major contract with a national retailer, expanding our team to 50 employees.",
    },
    {
      year: "2010",
      title: "Facility Expansion",
      description:
        "Moved to a larger 20,000 sq. ft. facility with modern machinery to increase production capacity.",
    },
    {
      year: "2013",
      title: "International Expansion",
      description:
        "Started exporting footwear to international markets, beginning with the Middle East and Europe.",
    },
    {
      year: "2016",
      title: "State-of-the-art Factory",
      description:
        "Inaugurated our current 100,000 sq. ft. state-of-the-art manufacturing facility with advanced technology.",
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description:
        "Launched our sustainability initiative, implementing eco-friendly practices and materials.",
    },
    {
      year: "2023",
      title: "Present Day",
      description:
        "Operating with 500+ skilled employees, producing over 1 million pairs of shoes annually for global brands.",
    },
  ];

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:-ml-px before:bg-amber-200">
      {timelineEvents.map((event, index) => (
        <div key={index} className="relative flex items-start">
          <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber-200 text-amber-600 font-bold text-sm">
            {event.year.substring(2)}
          </div>
          <Card className="ml-16 w-full">
            <CardContent className="p-6">
              <div className="text-sm text-amber-600 font-semibold">
                {event.year}
              </div>
              <h3 className="text-lg font-bold mt-1">{event.title}</h3>
              <p className="text-gray-500 mt-2">{event.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
