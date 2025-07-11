
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "I've been banking with SecureBank for over 10 years and their customer service is unmatched. Their mobile app makes managing my finances incredibly easy.",
    author: "Sarah Johnson",
    role: "Small Business Owner",
    rating: 5
  },
  {
    id: 2,
    content: "The mortgage process was seamless from application to closing. My loan officer was always available to answer questions and guide me through each step.",
    author: "Michael Chen",
    role: "First-time Homebuyer",
    rating: 5
  },
  {
    id: 3,
    content: "Their investment advisors helped me create a retirement plan that makes me confident about my financial future. Truly personalized service.",
    author: "David Martinez",
    role: "Retirement Planner",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-bank-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-bank-navy sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Trusted by thousands of individuals and businesses worldwide.
          </p>
        </div>
        
        <div className="mt-12 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-bank-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="mt-auto">
                  <div className="font-medium text-bank-navy">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-bank-blue">Join thousands of satisfied customers who trust SecureBank with their financial needs.</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
