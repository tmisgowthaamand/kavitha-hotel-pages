import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const Route = createFileRoute("/house-rules")({
  head: () => ({
    meta: [
      { title: "House Rules — Kavitha Hostel" },
      { name: "description", content: "House rules to keep Kavitha Hostel safe, clean and comfortable for everyone." },
      { property: "og:title", content: "House Rules — Kavitha Hostel" },
      { property: "og:description", content: "Simple rules that keep our PG safe and comfortable." },
    ],
  }),
  component: () => (
    <PolicyPage title="House Rules" updated="May 13, 2026">
      <p>These rules help us maintain a safe, respectful and comfortable home for every resident.</p>
      <PolicySection heading="1. Entry & Curfew">
        <p>Main gate closes at 10:30 PM. Late entry requires prior intimation to the warden. Biometric access is personal and non-transferable.</p>
      </PolicySection>
      <PolicySection heading="2. Visitors">
        <p>Visitors are welcome in the common area between 9:00 AM and 8:00 PM. Visitors are not allowed inside private rooms. Overnight guests are not permitted.</p>
      </PolicySection>
      <PolicySection heading="3. Cleanliness & Maintenance">
        <p>Keep your room and shared spaces tidy. Report maintenance issues promptly. Damages caused by negligence will be charged to the resident.</p>
      </PolicySection>
      <PolicySection heading="4. Noise & Conduct">
        <p>Quiet hours are between 10:00 PM and 7:00 AM. Be respectful to fellow residents and staff. Harassment of any kind will not be tolerated.</p>
      </PolicySection>
      <PolicySection heading="5. Prohibited Items">
        <p>Smoking, alcohol, drugs, weapons, pets and high-wattage appliances (induction stoves, heaters) are strictly prohibited inside the premises.</p>
      </PolicySection>
      <PolicySection heading="6. Meals">
        <p>Meals are served at fixed times. Please inform the kitchen in advance if you will skip a meal. Food is not to be carried into rooms.</p>
      </PolicySection>
      <PolicySection heading="7. Safety">
        <p>Lock your room when stepping out. Do not share access cards or keys. In case of emergency, contact the warden immediately on the posted number.</p>
      </PolicySection>
    </PolicyPage>
  ),
});
