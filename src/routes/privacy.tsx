import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kavitha PG Hostel" },
      { name: "description", content: "How Kavitha PG Hostel collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Kavitha PG Hostel" },
      { property: "og:description", content: "Our commitment to safeguarding your personal information." },
    ],
  }),
  component: () => (
    <PolicyPage title="Privacy Policy" updated="May 13, 2026">
      <p>
        Your privacy matters to us. This policy explains what information we
        collect, how we use it, and the choices you have regarding your data.
      </p>
      <PolicySection heading="1. Information We Collect">
        <p>We collect personal details (name, contact information, government ID, photograph, emergency contact), booking history and on-premises CCTV footage for safety.</p>
      </PolicySection>
      <PolicySection heading="2. How We Use Your Information">
        <p>Information is used to verify identity, process bookings and payments, communicate updates, ensure security, and comply with legal obligations such as local police verification.</p>
      </PolicySection>
      <PolicySection heading="3. Sharing of Information">
        <p>We do not sell your data. Information may be shared with payment processors, government authorities upon lawful request, and trusted service providers acting on our behalf.</p>
      </PolicySection>
      <PolicySection heading="4. Data Retention">
        <p>We retain personal data only as long as necessary to fulfil the purposes outlined here or as required by law. CCTV footage is rotated every 30 days unless retained for an investigation.</p>
      </PolicySection>
      <PolicySection heading="5. Your Rights">
        <p>You may request access, correction or deletion of your personal data by writing to hello@kavithapg.in. Some information may be retained where required by law.</p>
      </PolicySection>
      <PolicySection heading="6. Security">
        <p>We use reasonable physical, administrative and technical safeguards to protect your information from unauthorised access or disclosure.</p>
      </PolicySection>
      <PolicySection heading="7. Contact">
        <p>For privacy questions, contact us at hello@kavithapg.in or +91 99999 99999.</p>
      </PolicySection>
    </PolicyPage>
  ),
});
