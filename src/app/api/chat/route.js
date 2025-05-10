import axios from 'axios';

// Configure the Groq API endpoint
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function POST(request) {
  // Get request body
  const body = await request.json();
  const { message } = body;
  
  // In a real application, you would get this from environment variables
  // For demo purposes, we'll use a placeholder - replace with your actual API key in production
  const GROQ_API_KEY = process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY';

  try {
    // If no API key is set, fallback to simulated response
    if (!GROQ_API_KEY || GROQ_API_KEY === 'YOUR_GROQ_API_KEY') {
      // Simulate AI response for demo purposes
      const simulatedResponses = {
        "How do I sell my license?": "Selling your license is easy! Simply upload your license details through our secure portal, and our team will provide a valuation within 24 hours. Once you accept the offer, we'll handle the transfer process and you'll receive payment within 2-3 business days.",
        "What types of software do you support?": "We support a wide range of enterprise software licenses including Microsoft, Adobe, Oracle, SAP, Autodesk, VMware, Salesforce, and many more. If you're unsure about your specific license, please contact our team for assistance.",
        "How long does the process take?": "The entire process typically takes 3-5 business days from submission to payment. License valuation is completed within 24 hours, and once you accept the offer, payment is processed within 2-3 business days.",
        "How much is my license worth?": "License values vary based on several factors including software type, version, remaining term, and current market demand. For an accurate valuation, please submit your license details through our portal, and our expert team will provide a competitive offer based on real-time market conditions.",
        "Is my data secure?": "Absolutely! We take security seriously. All data is encrypted using industry-standard protocols, and we're compliant with major security frameworks. We never share your information with unauthorized parties, and our systems undergo regular security audits."
      };
      
      // Extract exact matches or provide a default response
      let responseText = '';
      
      // First check for exact matches
      if (simulatedResponses[message]) {
        responseText = simulatedResponses[message];
      } else {
        // If no exact match, check for partial matches
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes('sell') || lowerCaseMessage.includes('license')) {
          responseText = simulatedResponses["How do I sell my license?"];
        } else if (lowerCaseMessage.includes('software') || lowerCaseMessage.includes('support')) {
          responseText = simulatedResponses["What types of software do you support?"];
        } else if (lowerCaseMessage.includes('time') || lowerCaseMessage.includes('long') || lowerCaseMessage.includes('process')) {
          responseText = simulatedResponses["How long does the process take?"];
        } else if (lowerCaseMessage.includes('worth') || lowerCaseMessage.includes('value') || lowerCaseMessage.includes('cost')) {
          responseText = simulatedResponses["How much is my license worth?"];
        } else if (lowerCaseMessage.includes('secure') || lowerCaseMessage.includes('security') || lowerCaseMessage.includes('data')) {
          responseText = simulatedResponses["Is my data secure?"];
        } else {
          // Default response
          responseText = "Thank you for your question! For specific information, please contact our support team at support@softsell.com or call us at +1 (555) 123-4567. We're here to help Monday through Friday, 9am to 5pm PST.";
        }
      }
      
      return new Response(JSON.stringify({ 
        response: responseText,
        model: "Simulated AI (Demo Only)"
      }), { status: 200 });
    }
    
    // Make request to Groq API
    const response = await axios.post(
      GROQ_API_URL, 
      {
        model: "llama3-70b-8192", // Using LLaMA 3 70B
        messages: [
          {
            role: "system", 
            content: "You are an AI assistant for SoftSell, a company that helps businesses sell their unused software licenses. Respond concisely and helpfully with information about SoftSell's process, supported software types, pricing, and security. Keep answers brief (under 120 words). If you don't know an answer, refer users to contact support@softsell.com or call +1 (555) 123-4567."
          },
          { 
            role: "user", 
            content: message
          }
        ],
        temperature: 0.5,
        max_tokens: 150
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        }
      }
    );

    // Return the response
    return new Response(JSON.stringify({
      response: response.data.choices[0].message.content,
      model: response.data.model
    }), { status: 200 });
  } catch (error) {
    console.error('Error calling Groq API:', error);
    
    // Return error response
    return new Response(JSON.stringify({ 
      error: 'Failed to generate response',
      detail: error.message
    }), { status: 500 });
  }
}
