import { motion } from "framer-motion";

export default function Legal() {
  return (
    <div className="bg-dark-900 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto glass p-8 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-display font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-6 italic">Last Updated: January 2026</p>
          
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
            <p>At SelectMyCards.com, we believe your financial data belongs to you, we are "Privacy First."</p>
            
            <h2 className="text-2xl font-bold text-white mt-8">Information We Collect</h2>
            <p>We limit our data collection to the absolute minimum required to provide our service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Non-Personal Input Data:</strong> We collect data points such as your income bracket, credit score range, and spending categories (e.g., Shopping, Travel) to power our recommendation algorithm.</li>
              <li><strong>No Contact Details Required:</strong> We do not ask for your name, phone number, or email address to generate card recommendations.</li>
              <li><strong>Usage Data:</strong> Like most websites, we may use cookies or standard analytics to understand which pages are most popular.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-8">How We Use Your Information</h2>
            <p>To Recommend Cards: Your input data is processed instantly by our algorithm to filter credit cards that match your profile.</p>
            <p>To Improve Our Service: Aggregated, anonymous data helps us understand which cards are most popular among users.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8">Zero Spam Promise</h2>
            <p>Since we do not collect your contact details, we cannot—and will never—spam you with calls, SMS, or emails. We do not sell your data to third-party telemarketers.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8">Third-Party Links</h2>
            <p>Our website contains links to third-party websites (e.g., bank application pages). Once you leave our site, we are not responsible for the privacy practices of those third-party sites.</p>
          </div>

          <hr className="my-12 border-white/10" />

          <h2 className="text-4xl font-display font-bold text-white mb-8">Terms of Service</h2>
          
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
            <h3 className="text-2xl font-bold text-white">Acceptance of Terms</h3>
            <p>By accessing SelectMyCards.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>
            
            <h3 className="text-2xl font-bold text-white mt-8">Informational Purpose Only (Not Financial Advice)</h3>
            <p>SelectMyCards.com is a financial literacy and comparison tool. We are not a bank, credit card issuer, or financial advisor & not SEBI registered.</p>
            <p><strong>Accuracy:</strong> While we strive to keep interest rates, fees, and reward details accurate, banks change their terms frequently. We cannot guarantee that all information is 100% up-to-date at all times.</p>
            <p><strong>Always Verify:</strong> You must verify the final terms and conditions on the official bank website before applying.</p>
            
            <h3 className="text-2xl font-bold text-white mt-8">No Guarantee of Approval</h3>
            <p>Our platform suggests cards you may be eligible for based on the data you provide. However, credit card approval is at the sole discretion of the issuing bank. SelectMyCards.com has no influence over approval decisions.</p>
            
            <h3 className="text-2xl font-bold text-white mt-8">Limitation of Liability</h3>
            <p>SelectMyCards.com shall not be liable for any damages or financial losses arising from your use of this website or your reliance on any information provided here.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
