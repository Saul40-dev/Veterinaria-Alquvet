import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-balance text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}
