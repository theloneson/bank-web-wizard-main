
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import BankingPageLayout from "./BankingPageLayout"
import { Calendar } from "lucide-react"

interface ComingSoonPageProps {
  title: string
  subtitle: string
  description: string
  notifyLabel?: string
}

export default function ComingSoonPage({
  title,
  subtitle,
  description,
  notifyLabel = "Notify me when available"
}: ComingSoonPageProps) {
  return (
    <BankingPageLayout
      title={title}
      subtitle={subtitle}
    >
      <div className="max-w-3xl mx-auto">
        <Card className="border-2 border-bank-blue/10">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <Calendar className="w-16 h-16 mx-auto text-bank-blue" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {description}
              </p>
              <Button className="bg-bank-blue hover:bg-bank-navy">
                {notifyLabel}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
}
