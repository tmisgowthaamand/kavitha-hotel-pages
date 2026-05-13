import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Kavitha PG Hotel" },
      { name: "description", content: "Terms of Service governing your stay at Kavitha PG Hotel." },
      { property: "og:title", content: "Terms of Service — Kavitha PG Hotel" },
      { property: "og:description", content: "The terms governing bookings and stays at Kavitha PG Hotel." },
    ],
  }),
  component: () => (
    <PolicyPage title="Terms of Service" updated="May 13, 2026">
      <p>
        These Terms of Service ("Terms") govern your booking, occupancy and use
        of facilities at Kavitha PG Hotel ("we", "us", "our"). By confirming a
        booking or moving in, you agree to be bound by these Terms.
      </p>
      <PolicySection heading="1. Eligibility & Booking">
        <p>Guests must be 18 years or older and provide a valid government ID and a recent photograph at the time of booking. Bookings are confirmed only on receipt of the security deposit and the first month's rent.</p>
      </PolicySection>
      <PolicySection heading="2. Rent, Deposit & Dues">
        <p>Rent is payable monthly in advance, on or before the 5th of every month. A refundable security deposit equal to one month's rent is collected at move-in and refunded within 30 days of vacating, after deducting any dues or damages.</p>
      </PolicySection>
      <PolicySection heading="3. Notice Period">
        <p>A written notice of at least 30 days is required before vacating. Failure to provide notice may result in deduction from the security deposit.</p>
      </PolicySection>
      <PolicySection heading="4. Use of Premises">
        <p>The premises are to be used solely for personal residential purposes. Commercial activity, sub-letting, or hosting overnight guests without prior approval is strictly prohibited.</p>
      </PolicySection>
      <PolicySection heading="5. Liability">
        <p>Kavitha PG Hotel is not liable for loss, theft or damage to personal belongings. Guests are encouraged to use lockers and insure valuable items.</p>
      </PolicySection>
      <PolicySection heading="6. Termination">
        <p>We reserve the right to terminate the stay of any guest violating these Terms or the House Rules, with appropriate notice.</p>
      </PolicySection>
      <PolicySection heading="7. Governing Law">
        <p>These Terms are governed by the laws of India and disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru.</p>
      </PolicySection>
    </PolicyPage>
  ),
});
