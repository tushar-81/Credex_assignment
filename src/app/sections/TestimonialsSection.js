'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import ClientOnly from '../components/ClientOnly';

const testimonials = [
  {
    id: 1,
    quote: "SoftSell helped us recover over $50,000 from unused Adobe licenses. The process was quick, and their valuation was spot on. I highly recommend their service to any company looking to optimize their software costs.",
    name: "Sarah Johnson",
    title: "IT Director",
    company: "TechVision Inc.",
    avatarUrl: "/avatar1.svg"
  },
  {
    id: 2,
    quote: "As a growing startup, we needed to recoup costs from software licenses that were no longer in use. SoftSell provided a seamless experience and excellent customer support throughout the entire process.",
    name: "Michael Chen",
    title: "Operations Manager",
    company: "NexGen Solutions",
    avatarUrl: "/avatar2.svg"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ClientOnly>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Customers Say
            </motion.h2>
          </ClientOnly>
          <ClientOnly>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}            >
              Don&apos;t just take our word for it. Here&apos;s what businesses are saying about their experience with SoftSell.
            </motion.p>
          </ClientOnly>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ClientOnly key={testimonial.id}>
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >                <FaQuoteLeft className="absolute top-8 left-8 text-primary/20 text-4xl" />
                <div className="mb-6 text-gray-600 dark:text-gray-300 relative z-10 pt-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </div>
                
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 relative mr-4">
                    <Image 
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ClientOnly>
          ))}
        </div>
      </div>
    </section>
  );
}
