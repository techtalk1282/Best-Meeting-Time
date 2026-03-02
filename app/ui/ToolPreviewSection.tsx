// app/ui/ToolPreviewSection.tsx
// PURPOSE: Tool preview section structure ONLY.
// NO styling, NO logic, NO state, NO behavior.

import { ReactNode } from "react";

export default function ToolPreviewSection({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <section>
      {children}

      <div>
        {/* Time comparison preview placeholder */}
      </div>

      <div>
        {/* Overlap bar placeholder */}
      </div>

      <div>
        {/* Suggested time window placeholder */}
      </div>

      <div>
        {/* Action buttons placeholder */}
      </div>
    </section>
  );
}
