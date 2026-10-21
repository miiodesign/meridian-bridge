import { consultationUrl, inquiryUrl } from './design'

export function PrivacyContent() {
  return (
    <div className="mb-legal-content">
      <p className="mb-draft-notice">Draft for owner review — not yet approved for production publication.</p>
      <h3>Information you choose to share</h3>
      <p>The inquiry link opens a form hosted by Tally. That form asks for your name, email address, where you are from, the services you are interested in, a brief description of your situation, and how you heard about us. Share only the information needed to discuss coordination and travel options. Do not upload or include medical records, diagnoses, government identification, or payment details.</p>
      <h3>How inquiries are used</h3>
      <p>Information submitted to Meridian Bridge is used to respond to your inquiry and discuss requested services. Sending an inquiry does not book medical care, create a patient relationship, or constitute consent to marketing. Discuss any transfer of health information to a provider separately through an appropriate channel.</p>
      <h3>Third-party services</h3>
      <p>Tally processes form submissions, and Calendly handles consultation bookings. Their services have their own privacy practices and may process information outside your country. Review <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noopener noreferrer">Tally’s Privacy Policy</a> and <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Calendly’s Privacy Notice</a> before submitting information.</p>
      <p>This website links to those services rather than storing inquiry submissions directly in its frontend. Hosting and font providers may receive routine connection information when you load the site. Form notification settings, any downstream integrations, and retention arrangements must be confirmed by Meridian Bridge before this draft is approved.</p>
      <h3>Questions and requests</h3>
      <p>You can raise a privacy question or ask about access, correction, or deletion through the <a href={inquiryUrl} target="_blank" rel="noopener noreferrer">inquiry form</a> or during a consultation. Do not include sensitive information in the request. A dedicated privacy contact and a retention policy need owner confirmation before publication.</p>
    </div>
  )
}

export function TermsContent() {
  return (
    <div className="mb-legal-content">
      <p className="mb-draft-notice">Draft for owner review — not yet approved for production publication.</p>
      <h3>Coordination, not medical advice</h3>
      <p>Meridian Bridge helps coordinate health screening and diagnostic appointments with providers in China. Website information and coordination conversations are not medical advice, diagnosis, treatment, or emergency care. Consult your own qualified clinician about test suitability and follow-up. In an emergency, contact local emergency services.</p>
      <h3>Provider services and decisions</h3>
      <p>Medical services are provided by the selected healthcare provider, not by this website. Provider acceptance, test requirements, interpretation, report timing, and language support vary. Confirm the arrangements with the provider before committing. Screening cannot detect every condition, and no particular result or outcome is guaranteed.</p>
      <h3>Quotes, fees, and travel</h3>
      <p>Prices and waiting times shown here are illustrative and may change. CAD and USD figures are labeled separately and should not be added without currency conversion. Request a written quote and confirm inclusions, payment terms, and cancellation or refund conditions before booking. Travel entry requirements, insurance, and medical suitability for travel should be checked independently.</p>
      <h3>Inquiries and third-party booking</h3>
      <p>Submitting a Tally inquiry or booking a free Calendly consultation does not confirm a medical appointment or commit you to a paid service. Third-party platforms and medical providers apply their own terms. Do not send sensitive health information through the general inquiry form.</p>
      <h3>Questions before booking</h3>
      <p>Use the <a href={inquiryUrl} target="_blank" rel="noopener noreferrer">inquiry form</a> or <a href={consultationUrl} target="_blank" rel="noopener noreferrer">book a free consultation</a> to discuss the proposed arrangements. Service-specific agreements should be reviewed before making payment.</p>
    </div>
  )
}
