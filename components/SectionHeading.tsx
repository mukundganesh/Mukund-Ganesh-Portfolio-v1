import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="space-y-3">
      <p className="text-sm uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-textPrimary sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-textMuted">{description}</p>
      ) : null}
    </Reveal>
  );
}

