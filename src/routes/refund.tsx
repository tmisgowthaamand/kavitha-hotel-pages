import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Kavitha PG Hotel" },
      { name: "description", content: "Refund and cancellation terms for bookings at Kavitha PG Hotel." },
      { property: "og:title", content: "Refund & Cancellation Policy — Kavitha PG Hotel" },
      { property: "og:description", content: "Our refund and cancellation terms in plain language." },
    ],
  }),
  component: () => (
    <PolicyPage title="Refund & Cancellation Policy" updated="May 13, 2026">
      <p>This policy explains our approach to cancellations, refunds and deposit returns.</p>
      <PolicySection heading="1. Booking Cancellation">
        <p>Cancellations made 7+ days before the move-in date receive a full refund of advance rent. Cancellations within 7 days are eligible for a 50% refund. No refund is provided for no-shows.</p>
      </PolicySection>
      <PolicySection heading="2. Security Deposit Refund">
        <p>The security deposit is refunded within 30 days of vacating, subject to clearance of dues, damages or pending utility bills.</p>
      </PolicySection>
      <PolicySection heading="3. Mid-Month Vacating">
        <p>Rent is non-refundable for partial months. Guests vacating mid-month are charged for the full month unless agreed otherwise in writing.</p>
      </PolicySection>
      <PolicySection heading="4. Deductions">
        <p>Deductions may include unpaid rent, damage to property, deep-cleaning charges if required, and any pending food or laundry charges.</p>
      </PolicySection>
      <PolicySection heading="5. Mode of Refund">
        <p>Refunds are processed via UPI or bank transfer to the account from which payment was originally received.</p>
      </PolicySection>
      <PolicySection heading="6. Disputes">
        <p>Any disputes related to refunds may be raised within 15 days of the refund date by writing to hello@kavithapg.in.</p>
      </PolicySection>
    </PolicyPage>
  ),
});
