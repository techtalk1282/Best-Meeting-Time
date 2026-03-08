"use client";

type City = {
  name: string;
  tz: string;
};

type Window = {
  startUtc: string;
  endUtc: string;
};

export default function ShareActionButton({
  onShare,
}: {
  onShare: () => void;
}) {
  return (
    <div style={{ marginTop: "12px" }}>
      <button onClick={onShare}>
        Share meeting
      </button>
    </div>
  );
}
