'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ClientOnly from '../components/ClientOnly';

export default function HeroSection() {
  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-40 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Hero Content */}
          <ClientOnly>
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
              Unlock the Value of Your <span className="text-primary">Software Licenses</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Turn unused software licenses into cash. SoftSell provides the fastest, safest way to sell your excess enterprise software licenses at the best market price.
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ClientOnly>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all"
                >
                  Sell My Licenses
                </motion.button>
              </ClientOnly>
              <ClientOnly>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium py-3 px-8 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                >
                  Get a Free Valuation
                </motion.button>
              </ClientOnly>
            </div>
          </motion.div>
          </ClientOnly>
          
          {/* Hero Image */}
          <ClientOnly>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            <div className="relative h-[400px] w-full max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl"></div>
              <Image
                src="/hero-image.svg" 
                alt="Software License Management"
                width={500}
                height={400}
                className="object-cover relative z-10"
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                }}
                priority
              />            </div>
          </motion.div>
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
