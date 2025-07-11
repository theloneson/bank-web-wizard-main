import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowUpDown, 
  RefreshCw, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const exchangeSchema = z.object({
  fromCurrency: z.string().min(1, "Source currency is required"),
  toCurrency: z.string().min(1, "Target currency is required"),
  amount: z.string().min(1, "Amount is required").refine(val => !isNaN(Number(val)) && Number(val) > 0, "Amount must be a positive number"),
  fromAccount: z.string().min(1, "Please select source account"),
});

type ExchangeFormValues = z.infer<typeof exchangeSchema>;

const CurrencyExchangePage = () => {
  const [exchangeRates] = useState({
    "USD": { "NGN": 1580.00, "EUR": 0.85, "GBP": 0.73, "CAD": 1.35 },
    "NGN": { "USD": 0.00063, "EUR": 0.00054, "GBP": 0.00046, "CAD": 0.00085 },
    "EUR": { "USD": 1.18, "NGN": 1858.82, "GBP": 0.86, "CAD": 1.59 },
    "GBP": { "USD": 1.37, "NGN": 2164.38, "EUR": 1.16, "CAD": 1.85 },
    "CAD": { "USD": 0.74, "NGN": 1170.37, "EUR": 0.63, "GBP": 0.54 }
  });

  const [rateChanges] = useState({
    "USD/NGN": { change: 2.5, trend: "up" },
    "USD/EUR": { change: -0.8, trend: "down" },
    "USD/GBP": { change: 1.2, trend: "up" },
    "EUR/GBP": { change: 0.3, trend: "up" },
    "USD/CAD": { change: -0.5, trend: "down" }
  });

  const { toast } = useToast();

  const form = useForm<ExchangeFormValues>({
    resolver: zodResolver(exchangeSchema),
    defaultValues: {
      fromCurrency: "USD",
      toCurrency: "NGN"
    }
  });

  const userAccounts = [
    { id: "usd-checking", name: "USD Checking", balance: 15750.32, currency: "USD" },
    { id: "eur-savings", name: "EUR Savings", balance: 12500.00, currency: "EUR" },
    { id: "gbp-investment", name: "GBP Investment", balance: 8300.75, currency: "GBP" },
    { id: "ngn-business", name: "NGN Business", balance: 2500000.00, currency: "NGN" }
  ];

  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦", flag: "🇳🇬" },
    { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
    { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" }
  ];

  const watchedFromCurrency = form.watch("fromCurrency");
  const watchedToCurrency = form.watch("toCurrency");
  const watchedAmount = form.watch("amount");

  const getExchangeRate = (from: string, to: string) => {
    if (from === to) return 1;
    return exchangeRates[from as keyof typeof exchangeRates]?.[to as keyof typeof exchangeRates["USD"]] || 0;
  };

  const calculateExchangeAmount = () => {
    if (!watchedAmount || !watchedFromCurrency || !watchedToCurrency) return "0.00";
    const rate = getExchangeRate(watchedFromCurrency, watchedToCurrency);
    return (Number(watchedAmount) * rate).toFixed(2);
  };

  const swapCurrencies = () => {
    const fromCurrency = form.getValues("fromCurrency");
    const toCurrency = form.getValues("toCurrency");
    form.setValue("fromCurrency", toCurrency);
    form.setValue("toCurrency", fromCurrency);
  };

  const onSubmit = async (data: ExchangeFormValues) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const exchangedAmount = calculateExchangeAmount();
      
      toast({
        title: "Exchange Successful!",
        description: `Successfully exchanged ${data.fromCurrency} ${Number(data.amount).toLocaleString()} to ${data.toCurrency} ${Number(exchangedAmount).toLocaleString()}`,
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Exchange Failed",
        description: "There was an error processing your exchange. Please try again.",
      });
    }
  };

  const getRateChangeInfo = (from: string, to: string) => {
    const key = `${from}/${to}`;
    return rateChanges[key as keyof typeof rateChanges] || { change: 0, trend: "neutral" };
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Currency Exchange</h1>
          <p className="text-muted-foreground">Exchange currencies at competitive rates</p>
        </div>

        {/* Live Exchange Rates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Live Exchange Rates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Object.entries(rateChanges).map(([pair, info]) => {
                const [from, to] = pair.split('/');
                const rate = getExchangeRate(from, to);
                const fromCurrency = currencies.find(c => c.code === from);
                const toCurrency = currencies.find(c => c.code === to);
                
                return (
                  <div key={pair} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{pair}</span>
                      <div className={`flex items-center gap-1 text-sm ${
                        info.trend === 'up' ? 'text-green-600' : 
                        info.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {info.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : 
                         info.trend === 'down' ? <TrendingDown className="h-3 w-3" /> : null}
                        {info.change > 0 ? '+' : ''}{info.change}%
                      </div>
                    </div>
                    <div className="text-lg font-mono">
                      1 {fromCurrency?.symbol} = {rate.toFixed(4)} {toCurrency?.symbol}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Exchange Form */}
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Currency Exchange</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fromAccount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>From Account</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select account" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {userAccounts.map((account) => (
                              <SelectItem key={account.id} value={account.id}>
                                <div className="flex items-center justify-between w-full">
                                  <span>{account.name}</span>
                                  <span className="text-muted-foreground ml-4">
                                    {account.currency} {account.balance.toLocaleString()}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-5 items-end">
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="fromCurrency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>From</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select currency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {currencies.map((currency) => (
                                  <SelectItem key={currency.code} value={currency.code}>
                                    <div className="flex items-center gap-2">
                                      <span>{currency.flag}</span>
                                      <span>{currency.code}</span>
                                      <span className="text-muted-foreground">- {currency.name}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-center">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={swapCurrencies}
                        className="rounded-full"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="toCurrency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>To</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select currency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {currencies.map((currency) => (
                                  <SelectItem key={currency.code} value={currency.code}>
                                    <div className="flex items-center gap-2">
                                      <span>{currency.flag}</span>
                                      <span>{currency.code}</span>
                                      <span className="text-muted-foreground">- {currency.name}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            step="0.01" 
                            placeholder="0.00" 
                            className="text-lg"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Exchange Currency
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Exchange Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Exchange Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {watchedFromCurrency && watchedToCurrency ? (
                <>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">You send</p>
                    <p className="text-2xl font-bold">
                      {currencies.find(c => c.code === watchedFromCurrency)?.symbol}
                      {watchedAmount ? Number(watchedAmount).toLocaleString() : '0.00'}
                    </p>
                    <p className="text-sm text-muted-foreground">{watchedFromCurrency}</p>
                  </div>

                  <div className="text-center">
                    <ArrowUpDown className="h-6 w-6 mx-auto text-muted-foreground" />
                  </div>

                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">Recipient gets</p>
                    <p className="text-2xl font-bold text-primary">
                      {currencies.find(c => c.code === watchedToCurrency)?.symbol}
                      {Number(calculateExchangeAmount()).toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">{watchedToCurrency}</p>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exchange Rate</span>
                      <span className="font-mono">
                        1 {watchedFromCurrency} = {getExchangeRate(watchedFromCurrency, watchedToCurrency).toFixed(4)} {watchedToCurrency}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fee</span>
                      <span className="font-mono">$0.00</span>
                    </div>
                    {getRateChangeInfo(watchedFromCurrency, watchedToCurrency).change !== 0 && (
                      <div className="flex items-center gap-2 p-2 bg-blue-50 rounded text-blue-800">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-xs">
                          Rate {getRateChangeInfo(watchedFromCurrency, watchedToCurrency).trend === 'up' ? 'increased' : 'decreased'} by {Math.abs(getRateChangeInfo(watchedFromCurrency, watchedToCurrency).change)}% today
                        </span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select currencies to see exchange preview</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CurrencyExchangePage;