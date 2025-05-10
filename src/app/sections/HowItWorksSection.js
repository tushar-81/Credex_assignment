'use client';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaChartLine, FaDollarSign } from 'react-icons/fa';
import ClientOnly from '../components/ClientOnly';

const steps = [
  {
    icon: <FaCloudUploadAlt className="text-4xl sm:text-5xl text-primary" />,
    title: "Upload Your License",
    description: "Upload your software license details through our secure platform. We support major enterprise software including Microsoft, Adobe, Oracle, and more."
  },
  {
    icon: <FaChartLine className="text-4xl sm:text-5xl text-primary" />,
    title: "Get Instant Valuation",
    description: "Our AI-powered technology analyzes current market conditions and demand to provide you with the best possible valuation for your licenses."
  },
  {
    icon: <FaDollarSign className="text-4xl sm:text-5xl text-primary" />,
    title: "Get Paid Quickly",
    description: "Once you accept the offer, receive payment through your preferred method within 2-3 business days. Fast, secure, and hassle-free."
  }
];

export default function HowItWorksSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">          <ClientOnly>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How It Works
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
              Our simple 3-step process makes selling your software licenses easy and profitable.
            </motion.p>
          </ClientOnly>
        </div>        <ClientOnly>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-primary/10 p-4 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                <div className="mt-6 text-primary font-semibold text-lg">
                  Step {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </ClientOnly>
      </div>
    </section>
  );
}
