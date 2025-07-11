
import Footer from "./Footer"

interface BankingPageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export default function BankingPageLayout({
  children,
  title,
  subtitle
}: BankingPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bank-lightBlue to-white dark:from-gray-900 dark:to-gray-800">
      <div className="bg-bank-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{title}</h1>
          {subtitle && (
            <p className="text-lg text-center max-w-2xl mx-auto text-gray-200">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>
      <Footer />
    </div>
  );
}
