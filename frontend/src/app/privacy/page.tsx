import PageHero from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/site-config'

const PrivacySection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-b border-slate-200 py-8 last:border-0">
    <h2 className="font-display text-xl font-bold text-slate-900">{title}</h2>
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">{children}</div>
  </section>
)

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Notice"
        subtitle="What the Lemaiyans Travels website asks for when you request travel information."
        align="left"
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700">
            <strong>Last updated:</strong> October 2026. This notice describes the website inquiry form. If you proceed with a booking, the travel desk may explain additional information needed to arrange that service.
          </p>

          <PrivacySection title="Information you submit">
            <p>The quotation form asks for your name, email address, phone number, requested service, and a message about your travel plans. Please do not include passport numbers, payment-card details, passwords, or other sensitive information in the message field.</p>
          </PrivacySection>

          <PrivacySection title="Why we use it">
            <p>The travel desk uses these details to review your request, prepare a response, and contact you about the service you selected.</p>
          </PrivacySection>

          <PrivacySection title="How an inquiry is sent">
            <p>When email delivery is configured, the website sends your inquiry to the travel desk address through the SMTP email provider configured for the site. The website does not save form submissions in a database. If email delivery is not configured or fails, the form reports that it could not send your request and gives you the desk’s direct contact details.</p>
          </PrivacySection>

          <PrivacySection title="Retention and access">
            <p>Website inquiries are held in the travel desk mailbox for two years. Contact the travel desk to ask about an inquiry or request access, correction, or deletion where applicable.</p>
          </PrivacySection>

          <PrivacySection title="Cookies and analytics">
            <p>The current website does not load Google Analytics or set marketing or analytics cookies. Your browser and hosting provider may process technical information needed to deliver and secure the site; the exact server-log retention depends on the hosting configuration.</p>
          </PrivacySection>

          <PrivacySection title="Your choices and questions">
            <p>For a privacy question or request, contact Lemaiyans Travels Limited:</p>
            <address className="not-italic">
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary-crimson hover:underline">{siteConfig.email}</a><br />
              <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-slate-900 hover:text-primary-crimson">{siteConfig.phone}</a><br />
              {siteConfig.address}
            </address>
            <p>Information about data-subject rights in Kenya is available from the <a href="https://www.odpc.go.ke/rights-of-a-data-subject/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-crimson underline underline-offset-2">Office of the Data Protection Commissioner</a>.</p>
          </PrivacySection>
        </div>
      </section>
    </>
  )
}
