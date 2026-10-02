'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, UserCheck, FileText, Globe } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/site-config'

const PrivacyHero = () => (
  <PageHero
    title="Privacy Policy"
    subtitle="How we collect, use, and protect your personal information."
    align="left"
  />
)

const PrivacySection = ({ title, children, icon: Icon, delay = 0 }: {
  title: string
  children: any
  icon: any
  delay?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-12"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary-crimson/10 rounded-lg flex items-center justify-center">
          <Icon className="text-primary-crimson" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-graphite-black">{title}</h2>
      </div>
      <div className="prose prose-slate max-w-none text-graphite-light leading-relaxed">
        {children}
      </div>
    </motion.div>
  )
}

export default function PrivacyPage() {
  const lastUpdated = "November 2024"

  return (
    <>
      <PrivacyHero />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl p-8 mb-12">
            <p className="text-graphite-light">
              <strong>Last updated:</strong> {lastUpdated}
            </p>
          </div>

          <PrivacySection
            title="Information We Collect"
            icon={Database}
            delay={0.1}
          >
            <p className="mb-4">We collect information to provide better services to all our users. The types of information we collect include:</p>

            <h3 className="text-lg font-semibold text-graphite-black mt-6 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact details (email, phone number, address)</li>
              <li>Travel preferences and requirements</li>
              <li>Passport and visa information (when applicable)</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-lg font-semibold text-graphite-black mt-6 mb-3">Technical Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </PrivacySection>

          <PrivacySection
            title="How We Use Your Information"
            icon={Eye}
            delay={0.2}
          >
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and maintain our travel booking services</li>
              <li>Process reservations and transactions</li>
              <li>Communicate with you about your bookings</li>
              <li>Send travel-related information and updates</li>
              <li>Improve our website and services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </PrivacySection>

          <PrivacySection
            title="Information Sharing"
            icon={UserCheck}
            delay={0.3}
          >
            <p className="mb-4">We may share your information in the following circumstances:</p>

            <h3 className="text-lg font-semibold text-graphite-black mt-6 mb-3">Service Providers</h3>
            <p>We work with third-party service providers to facilitate our services, such as:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Airlines and hotels for booking fulfillment</li>
              <li>Payment processors for secure transactions</li>
              <li>Email marketing services for communications</li>
              <li>Analytics providers to understand website usage</li>
            </ul>

            <h3 className="text-lg font-semibold text-graphite-black mt-6 mb-3">Legal Requirements</h3>
            <p>We may disclose your information when required by law or to protect our rights, property, or safety, or that of our users or the public.</p>
          </PrivacySection>

          <PrivacySection
            title="Data Security"
            icon={Lock}
            delay={0.4}
          >
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your information against:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Unauthorized access, alteration, or destruction</li>
              <li>Accidental loss or damage</li>
              <li>Unlawful processing or disclosure</li>
            </ul>
            <p className="mt-4">However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </PrivacySection>

          <PrivacySection
            title="Cookies and Tracking"
            icon={FileText}
            delay={0.5}
          >
            <p className="mb-4">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve your experience</li>
              <li>Analyze website traffic and trends</li>
            </ul>
            <p className="mt-4">You can control cookies through your browser settings, but disabling cookies may affect your experience on our website.</p>
          </PrivacySection>

          <PrivacySection
            title="Your Rights"
            icon={UserCheck}
            delay={0.6}
          >
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us using the information below.</p>
          </PrivacySection>

          <PrivacySection
            title="Children's Privacy"
            icon={Shield}
            delay={0.7}
          >
            <p>Our services are not intended for children under 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will take steps to delete such information immediately.</p>
          </PrivacySection>

          <PrivacySection
            title="International Data Transfers"
            icon={Globe}
            delay={0.8}
          >
            <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.</p>
          </PrivacySection>

          <PrivacySection
            title="Changes to This Policy"
            icon={FileText}
            delay={0.9}
          >
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date at the top of this policy.</p>
          </PrivacySection>

          <PrivacySection
            title="Contact Us"
            icon={UserCheck}
            delay={1.0}
          >
            <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
            <div className="mt-6 p-6 bg-slate-50 rounded-lg">
              <div className="space-y-3">
                <p><strong>Email:</strong> info@lemaiyanstravels.com</p>
                <p><strong>Phone:</strong> +254 123 456 789</p>
                <p><strong>Address:</strong> Eldoret, Kenya</p>
              </div>
            </div>
          </PrivacySection>
        </div>
      </section>
    </>
  )
}