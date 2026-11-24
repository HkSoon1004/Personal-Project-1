type LogoProps = {
  size?: "sm" | "md";
};

export default function Logo({ size = "md" }: LogoProps) {
  const box = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  return (
    <span className="inline-flex items-center gap-xs">
      <span
        className={`${box} rounded-xs bg-primary text-on-primary inline-flex items-center justify-center font-mono text-caption`}
      >
        C
      </span>
      <span className="font-button text-button text-ink">커리어랩</span>
    </span>
  );
}
