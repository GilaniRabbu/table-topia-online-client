import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "Food Blogger",
    text: "TableTopia made finding and booking a table so effortless! The interface is intuitive and the confirmation was instant. Definitely my go-to for all restaurant reservations now.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    text: "As someone who frequently organizes business dinners, TableTopia has been a game changer. The ability to filter by cuisine and check availability in real-time has saved me countless hours.",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Food Enthusiast",
    text: "I discovered so many hidden gems through TableTopia that I wouldn't have found otherwise. Their curated lists of restaurants helped me explore new cuisines and neighborhoods.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    name: "James Johnson",
    role: "Restaurant Owner",
    text: "Being listed on TableTopia has significantly increased our bookings. Their platform is easy to manage from the business side, and the customer service is excellent.",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
  },
];

const Testimonials: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    // Auto-slide effect
    const autoSlideInterval = setInterval(() => {
      if (api) {
        api.scrollNext();
        if (current >= count) {
          api.scrollTo(0);
        }
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoSlideInterval);
  }, [api, current, count]);

  return (
    <section className="py-16 bg-restaurant-neutral">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-primary mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why food lovers and restaurant owners choose TableTopia for
            their dining experiences.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="max-w-5xl mx-auto select-none"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/2 p-1 px-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="text-restaurant-primary mb-4">
                      <Quote size={24} />
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover border-2 border-restaurant-accent"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white" />
            <CarouselNext className="-right-4 border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current - 1 ? "bg-restaurant-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
