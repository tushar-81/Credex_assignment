'use client';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaMoneyBillWave, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import ClientOnly from '../components/ClientOnly';

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    title: "Secure Transactions",
    description: "Industry-leading security protocols protect your data and ensure safe license transfers every time."
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-primary" />,
    title: "Best Market Rates",
    description: "Our extensive marketplace and real-time pricing algorithms ensure you get top dollar for your licenses."
  },
  {
    icon: <FaLightbulb className="text-3xl text-primary" />,
    title: "Expert Valuation",
    description: "Advanced AI technology combined with market experts provides the most accurate license valuations."
  },
  {
    icon: <FaUserFriends className="text-3xl text-primary" />,
    title: "Dedicated Support",
    description: "Our customer success team guides you through every step of the process with personalized assistance."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">        <div className="text-center mb-16">
          <ClientOnly>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose SoftSell
            </motion.h2>
          </ClientOnly>
          <ClientOnly>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              With years of experience in the software resale market, we've built the most reliable platform for businesses.
            </motion.p>
          </ClientOnly>
        </div>        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ClientOnly key={index}>
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            </ClientOnly>
          ))}
        </div>        <ClientOnly>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied businesses who have successfully sold their unused software licenses through SoftSell.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full font-medium shadow-lg transition-all"
            >
              Start Your Valuation
            </motion.button>
          </motion.div>
        </ClientOnly>
      </div>
    </section>
  );
}
