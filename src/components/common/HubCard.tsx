import { Link } from "react-router-dom";

interface HubCardProps {
  title: string;
  description: string;
  to: string;
  ctaLabel?: string;
  ariaLabel?: string;
}

const HubCard = ({ title, description, to, ctaLabel = "Lire", ariaLabel }: HubCardProps) => {
  return (
    <article className="group rounded-2xl border bg-card text-card-foreground shadow-soft hover:shadow-md transition-all">
      <div className="p-5">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <Link
          to={to}
          aria-label={ariaLabel || `${ctaLabel} – ${title}`}
          className="inline-flex items-center mt-3 text-sm underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
};

export default HubCard;
