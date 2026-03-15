// app/ui/PremiumFeaturesSection.tsx
// PURPOSE: Premium features section structure ONLY.
// NO styling logic. Content layout only.

import { ReactNode } from "react";

type PremiumFeaturesSectionProps = {
  children?: ReactNode;
};

export default function PremiumFeaturesSection({
  children,
}: PremiumFeaturesSectionProps) {
  return (
    <section id="premium-features">

      {/* Section Header */}

      <div>
        <h2>Unlock Premium Features</h2>
        <p>
          Powerful tools for global scheduling professionals.
        </p>
      </div>

      {/* Feature Cards */}

      <div>

        <div>
          <h3>Share a Meeting Link</h3>
          <p>Send a meeting link with one click.</p>
        </div>

        <div>
          <h3>Compare Cities Globally</h3>
          <p>Plan meetings across international time zones.</p>
        </div>

        <div>
          <h3>Google Calendar</h3>
          <p>Save meetings directly to Google.</p>
        </div>

        <div>
          <h3>Outlook Calendar</h3>
          <p>Save meetings directly to Outlook.</p>
        </div>

        <div>
          <h3>Apple Calendar</h3>
          <p>Download a .ICS file for Apple.</p>
        </div>

        {children}

      </div>

      {/* Upgrade CTA */}

      <div>

        <button>
          Unlock Premium – $9 One-Time
        </button>

        <ul>
          <li>One-time payment</li>
          <li>No subscription</li>
          <li>Remove all ads</li>
          <li>Save & export meeting times</li>
          <li>Download .ics file options</li>
          <li>Share meeting links</li>
        </ul>

        <div>
          Secured by Stripe • Terms • Privacy
        </div>

      </div>

    </section>
  );
}
