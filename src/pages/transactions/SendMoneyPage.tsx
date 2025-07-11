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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, 
  ArrowRight, 
  Globe, 
  MapPin, 
  CreditCard, 
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const sendMoneySchema = z.object({
  transferType: z.enum(["local", "international"]),
  fromAccount: z.string().min(1, "Please select source account"),
  recipientName: z.string().min(2, "Recipient name is required"),
  recipientCountry: z.string().optional(),
  recipientAccount: z.string().min(5, "Account number/IBAN is required"),
  amount: z.string().min(1, "Amount is required").refine(val => !isNaN(Number(val)) && Number(val) > 0, "Amount must be a positive number"),
  currency: z.string().min(1, "Currency is required"),
  purpose: z.string().optional(),
  note: z.string().optional(),
});

type SendMoneyFormValues = z.infer<typeof sendMoneySchema>;

const SendMoneyPage = () => {
  const [transferType, setTransferType] = useState<"local" | "international">("local");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<SendMoneyFormValues | null>(null);
  const { toast } = useToast();

  const form = useForm<SendMoneyFormValues>({
    resolver: zodResolver(sendMoneySchema),
    defaultValues: {
      transferType: "local",
      currency: "USD"
    }
  });

  const userAccounts = [
    { id: "checking", name: "Checking Account", balance: 15750.32 },
    { id: "savings", name: "Savings Account", balance: 45200.00 },
    { id: "business", name: "Business Account", balance: 85300.75 }
  ];

  const exchangeRates = {
    "USD": { "NGN": 1580.00, "EUR": 0.85, "GBP": 0.73 },
    "NGN": { "USD": 0.00063, "EUR": 0.00054, "GBP": 0.00046 },
    "EUR": { "USD": 1.18, "NGN": 1858.82, "GBP": 0.86 },
    "GBP": { "USD": 1.37, "NGN": 2164.38, "EUR": 1.16 }
  };

  const onSubmit = (data: SendMoneyFormValues) => {
    setFormData(data);
    setShowConfirmation(true);
  };

  const confirmTransfer = async () => {
    if (!formData) return;
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Transfer Successful!",
        description: `Successfully sent $${formData.amount} to ${formData.recipientName}`,
      });
      
      // Reset form
      form.reset();
      setShowConfirmation(false);
      setFormData(null);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Transfer Failed",
        description: "There was an error processing your transfer. Please try again.",
      });
    }
  };

  const calculateExchangeAmount = (amount: string, fromCurrency: string, toCurrency: string) => {
    if (!amount || fromCurrency === toCurrency) return amount;
    const rate = exchangeRates[fromCurrency as keyof typeof exchangeRates]?.[toCurrency as keyof typeof exchangeRates["USD"]];
    return rate ? (Number(amount) * rate).toFixed(2) : amount;
  };

  const watchedAmount = form.watch("amount");
  const watchedCurrency = form.watch("currency");

  if (showConfirmation && formData) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">Confirm Transfer</h1>
            <p className="text-muted-foreground">Please review the details before confirming</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Transfer Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">From Account</p>
                  <p className="font-semibold">{userAccounts.find(acc => acc.id === formData.fromAccount)?.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Transfer Type</p>
                  <Badge variant={formData.transferType === "local" ? "default" : "secondary"}>
                    {formData.transferType === "local" ? "Local Transfer" : "International Transfer"}
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Recipient</p>
                  <p className="font-semibold">{formData.recipientName}</p>
                </div>
                {formData.recipientCountry && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Country</p>
                    <p className="font-semibold">{formData.recipientCountry}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Account Number</p>
                  <p className="font-mono">{formData.recipientAccount}</p>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Amount</p>
                  <p className="text-2xl font-bold">{formData.currency} {Number(formData.amount).toLocaleString()}</p>
                </div>
                {formData.transferType === "international" && formData.currency !== "USD" && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Exchange Rate</p>
                    <p className="font-semibold">1 USD = {exchangeRates["USD"][formData.currency as keyof typeof exchangeRates["USD"]]} {formData.currency}</p>
                  </div>
                )}
              </div>

              {formData.note && (
                <>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Note</p>
                    <p>{formData.note}</p>
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setShowConfirmation(false)} className="flex-1">
                  Back to Edit
                </Button>
                <Button onClick={confirmTransfer} className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  Confirm Transfer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Send Money</h1>
          <p className="text-muted-foreground">Transfer funds locally or internationally</p>
        </div>

        {/* Transfer Type Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Transfer Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Button
                variant={transferType === "local" ? "default" : "outline"}
                onClick={() => {
                  setTransferType("local");
                  form.setValue("transferType", "local");
                }}
                className="h-20 flex flex-col gap-2"
              >
                <MapPin className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Local Transfer</p>
                  <p className="text-xs text-muted-foreground">Same country transfers</p>
                </div>
              </Button>
              <Button
                variant={transferType === "international" ? "default" : "outline"}
                onClick={() => {
                  setTransferType("international");
                  form.setValue("transferType", "international");
                }}
                className="h-20 flex flex-col gap-2"
              >
                <Globe className="h-6 w-6" />
                <div>
                  <p className="font-semibold">International Transfer</p>
                  <p className="text-xs text-muted-foreground">Cross-border transfers</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transfer Form */}
        <Card>
          <CardHeader>
            <CardTitle>Transfer Details</CardTitle>
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
                            <SelectValue placeholder="Select source account" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {userAccounts.map((account) => (
                            <SelectItem key={account.id} value={account.id}>
                              <div className="flex items-center justify-between w-full">
                                <span>{account.name}</span>
                                <span className="text-muted-foreground ml-4">
                                  ${account.balance.toLocaleString()}
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

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="recipientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recipient Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {transferType === "international" && (
                    <FormField
                      control={form.control}
                      name="recipientCountry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Recipient Country</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Nigeria">Nigeria</SelectItem>
                              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                              <SelectItem value="Germany">Germany</SelectItem>
                              <SelectItem value="France">France</SelectItem>
                              <SelectItem value="Canada">Canada</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="recipientAccount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {transferType === "international" ? "IBAN / Account Number" : "Account Number"}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={transferType === "international" ? "GB29 NWBK 6016 1331 9268 19" : "1234567890"} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Currency</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="USD">USD - US Dollar</SelectItem>
                            <SelectItem value="NGN">NGN - Nigerian Naira</SelectItem>
                            <SelectItem value="EUR">EUR - Euro</SelectItem>
                            <SelectItem value="GBP">GBP - British Pound</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {transferType === "international" && watchedAmount && watchedCurrency !== "USD" && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-900">Exchange Rate Information</p>
                        <p className="text-sm text-blue-700">
                          {watchedCurrency} {Number(watchedAmount).toLocaleString()} = 
                          USD {calculateExchangeAmount(watchedAmount, watchedCurrency, "USD")}
                        </p>
                        <p className="text-xs text-blue-600 mt-1">
                          Rate: 1 {watchedCurrency} = {exchangeRates[watchedCurrency as keyof typeof exchangeRates]?.["USD"]} USD
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {transferType === "international" && (
                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Transfer</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select purpose" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="family-support">Family Support</SelectItem>
                            <SelectItem value="business">Business Payment</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="medical">Medical</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Add a note for the recipient..."
                          className="min-h-[80px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Review Transfer
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SendMoneyPage;