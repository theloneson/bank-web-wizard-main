import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle2, User, MapPin, FileText, CreditCard, Shield, Building2 } from "lucide-react";
import { LocationSelector } from "@/components/LocationSelector";
import { useNavigate } from "react-router-dom";
import { countries } from "@/utils/countries";
import { DynamicLocationSelector } from "@/components/DynamicLocationSelector";

const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  middleName: z.string().optional(),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"]),
  nationality: z.string().min(2, "Nationality is required"),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed", "other"]),
});

const contactInfoSchema = z.object({
  country: z.string().min(2, "Country is required"),
  state: z.string().min(2, "State/Province is required"),
  city: z.string().min(2, "City is required"),
  streetAddress: z.string().min(5, "Street address is required"),
  zipCode: z.string().min(2, "Postal/Zip code is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
});

const identificationSchema = z.object({
  idType: z.enum(["passport", "drivers-license", "national-id", "other"]),
  idNumber: z.string().min(5, "ID number is required"),
  idExpiry: z.string().min(1, "ID expiry date is required"),
  ssn: z.string().optional(),
});

const accountPreferencesSchema = z.object({
  accountType: z.enum(["savings", "checking", "money-market", "student", "business"]),
  preferredBranch: z.string().optional(),
});

const securityInfoSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  securityQuestion1: z.string().min(5, "Security question must be answered"),
  securityQuestion2: z.string().min(5, "Security question must be answered"),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept terms and conditions",
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const formSchemas = [
  personalInfoSchema,
  contactInfoSchema,
  identificationSchema,
  accountPreferencesSchema,
  securityInfoSchema,
];

const stepTitles = [
  "Personal Information",
  "Contact Information", 
  "Identification",
  "Account Preferences",
  "Security Setup",
  "Review & Submit",
];

const stepIcons = [User, MapPin, FileText, CreditCard, Shield, Building2];

type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
type ContactInfoFormValues = z.infer<typeof contactInfoSchema>;
type IdentificationFormValues = z.infer<typeof identificationSchema>;
type AccountPreferencesFormValues = z.infer<typeof accountPreferencesSchema>;
type SecurityInfoFormValues = z.infer<typeof securityInfoSchema>;

type FormValues = 
  | PersonalInfoFormValues
  | ContactInfoFormValues
  | IdentificationFormValues
  | AccountPreferencesFormValues
  | SecurityInfoFormValues;

const OpenAccountPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchemas[step - 1]),
    defaultValues: formData,
  });

  const onSubmit = async (data: FormValues) => {
    if (step < 6) {
      setFormData({...formData, ...data});
      setStep(step + 1);
      window.scrollTo(0, 0);
      form.reset({...formData, ...data});
    } else {
      setIsSubmitting(true);
      try {
        const allData = {...formData, ...data};
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        toast({
          title: "Account Application Submitted!",
          description: "We'll review your application and contact you within 24 hours.",
        });
        
        console.log('Account application data:', allData);
        
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
        
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "There was an error submitting your application. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const StepIcon = stepIcons[step - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Open Your Account</h1>
            <p className="text-xl text-blue-100">Join thousands of satisfied customers with our secure, international banking platform</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Section */}
          <Card className="mb-8 bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <StepIcon className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Step {step} of 6</h3>
                    <p className="text-sm text-gray-600">{stepTitles[step - 1]}</p>
                  </div>
                </div>
                <div className="hidden md:flex space-x-2">
                  {stepTitles.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        step > index + 1 ? 'bg-green-500' : 
                        step === index + 1 ? 'bg-blue-600' : 
                        'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${(step / 6) * 100}%` }}
                />
              </div>
            </CardHeader>
          </Card>

          {/* Main Form Card */}
          <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <User className="w-6 h-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-800">Personal Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="John" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="middleName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-gray-700">Middle Name</FormLabel>
                              <FormControl>
                                <Input placeholder="(optional)" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Date of Birth <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input type="date" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Gender <span className="text-red-500">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
                                  <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Nationality <span className="text-red-500">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
                                  <SelectValue placeholder="Select your nationality" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="max-h-60 overflow-y-auto">
                                {countries.map((country) => (
                                  <SelectItem key={country.code} value={country.name}>
                                    {country.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="maritalStatus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Marital Status <span className="text-red-500">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
                                  <SelectValue placeholder="Select your marital status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="single">Single</SelectItem>
                                <SelectItem value="married">Married</SelectItem>
                                <SelectItem value="divorced">Divorced</SelectItem>
                                <SelectItem value="widowed">Widowed</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <MapPin className="w-6 h-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
                      </div>
                      
                      <DynamicLocationSelector 
                        onCountryChange={(country) => form.setValue('country', country)}
                        onStateChange={(state) => form.setValue('state', state)}
                        onCityChange={(city) => form.setValue('city', city)}
                      />
                      
                      <FormField
                        control={form.control}
                        name="streetAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Street Address <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main Street" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Postal/Zip Code <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Postal/Zip Code" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Email <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" type="email" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <FileText className="w-6 h-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-800">Identification</h3>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="idType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">ID Type <span className="text-red-500">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
                                  <SelectValue placeholder="Select ID type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="passport">Passport</SelectItem>
                                <SelectItem value="drivers-license">Driver's License</SelectItem>
                                <SelectItem value="national-id">National ID</SelectItem>
                                <SelectItem value="other">Other Government ID</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="idNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">ID Number <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="ID123456789" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="idExpiry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">ID Expiry Date <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input type="date" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="ssn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">SSN/National ID Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="123-45-6789 (optional)" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <p className="text-xs text-gray-500 mt-1">Only required for US residents or as needed by local regulations</p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-800">Account Preferences</h3>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="accountType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Account Type <span className="text-red-500">*</span></FormLabel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                              <div 
                                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                                  field.value === "savings" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => field.onChange("savings")}
                              >
                                <h4 className="font-semibold text-lg text-gray-800">Savings</h4>
                                <p className="text-sm text-gray-600 mt-1">Earn interest on your balance</p>
                              </div>
                              <div 
                                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                                  field.value === "checking" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => field.onChange("checking")}
                              >
                                <h4 className="font-semibold text-lg text-gray-800">Checking</h4>
                                <p className="text-sm text-gray-600 mt-1">Daily transactions account</p>
                              </div>
                              <div 
                                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                                  field.value === "money-market" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => field.onChange("money-market")}
                              >
                                <h4 className="font-semibold text-lg text-gray-800">Money Market</h4>
                                <p className="text-sm text-gray-600 mt-1">Higher rates with limited access</p>
                              </div>
                              <div 
                                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                                  field.value === "student" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => field.onChange("student")}
                              >
                                <h4 className="font-semibold text-lg text-gray-800">Student</h4>
                                <p className="text-sm text-gray-600 mt-1">Special account for students</p>
                              </div>
                              <div 
                                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                                  field.value === "business" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => field.onChange("business")}
                              >
                                <h4 className="font-semibold text-lg text-gray-800">Business</h4>
                                <p className="text-sm text-gray-600 mt-1">For commercial purposes</p>
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredBranch"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Preferred Branch (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Downtown" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <Shield className="w-6 h-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-800">Security Setup</h3>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Create Password <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="At least 8 characters" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Confirm Password <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Re-enter password" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Separator className="my-6" />

                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-2">Security Questions</h4>
                        <p className="text-sm text-gray-600 mb-6">
                          These questions help us verify your identity if you forget your password
                        </p>
                      </div>

                      <FormField
                        control={form.control}
                        name="securityQuestion1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">What was the name of your first pet? <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your answer" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="securityQuestion2"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">In what city were you born? <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your answer" className="h-12 border-gray-300 focus:border-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Separator className="my-6" />

                      <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-6 border-2 rounded-xl bg-gray-50">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm">
                                I agree to the <a href="/terms" className="text-blue-600 hover:underline font-medium">Terms and Conditions</a> and <a href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</a> <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {step === 6 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <h3 className="text-2xl font-bold text-gray-800">Review & Submit</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        Please review your information before submitting your application. You can go back to make changes if needed.
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                        <h4 className="font-semibold text-lg text-gray-800 mb-4">Your account will be opened with:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div><span className="font-medium text-gray-700">Account Type:</span> <span className="text-gray-900">{formData.accountType?.charAt(0).toUpperCase() + formData.accountType?.slice(1)}</span></div>
                            <div><span className="font-medium text-gray-700">Name:</span> <span className="text-gray-900">{formData.firstName} {formData.middleName ? formData.middleName + ' ' : ''}{formData.lastName}</span></div>
                          </div>
                          <div className="space-y-2">
                            <div><span className="font-medium text-gray-700">Email:</span> <span className="text-gray-900">{formData.email}</span></div>
                            <div><span className="font-medium text-gray-700">Phone:</span> <span className="text-gray-900">{formData.phone}</span></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-xl">
                        <p className="text-sm text-gray-700">
                          By clicking "Submit Application", you confirm that all information provided is accurate and complete.
                          We may contact you for additional verification documents as required by international banking regulations.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-8 border-t">
                    {step > 1 ? (
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={goToPreviousStep}
                        disabled={isSubmitting}
                        className="h-12 px-6 border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </div>
                      ) : step < 6 ? (
                        <>
                          Continue <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OpenAccountPage;
