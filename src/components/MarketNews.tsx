
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ExternalLink } from "lucide-react";

interface NewsItem {
  title: string;
  source: string;
  time: string;
  impact: "high" | "medium" | "low";
}

export default function MarketNews() {
  const news: NewsItem[] = [
    {
      title: "Apple Reports Strong Q4 Earnings, Beats Revenue Expectations",
      source: "Reuters",
      time: "2h ago",
      impact: "high"
    },
    {
      title: "Fed Signals Potential Rate Cut in December Meeting",
      source: "Bloomberg",
      time: "4h ago",
      impact: "high"
    },
    {
      title: "Tesla Deliveries Exceed Analyst Forecasts for Q4",
      source: "CNBC",
      time: "6h ago",
      impact: "medium"
    },
    {
      title: "Tech Stocks Rally Amid AI Optimism",
      source: "Financial Times",
      time: "8h ago",
      impact: "medium"
    },
    {
      title: "Oil Prices Rise on Middle East Tensions",
      source: "Wall Street Journal",
      time: "10h ago",
      impact: "low"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "text-red-600 bg-red-100";
      case "medium": return "text-yellow-600 bg-yellow-100";
      case "low": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">Market News</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {news.map((item, index) => (
            <div key={index} className="px-4 py-3 hover:bg-gray-50 border-b last:border-b-0 cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getImpactColor(item.impact)}`}>
                  {item.impact.toUpperCase()}
                </span>
                <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-sm font-medium mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center text-xs text-gray-500">
                <span className="font-medium">{item.source}</span>
                <span className="mx-2">•</span>
                <Clock className="w-3 h-3 mr-1" />
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
