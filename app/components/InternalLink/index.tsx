import { Link } from "@remix-run/react";

type InternalLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export const InternalLink = ({ href, label, className }: InternalLinkProps) => {
  return (
    <span
      className={`text-yellow-400 text-lg block  font-bold uppercase hover:text-yellow-500 hover:cursor-pointer ${className}`}
    >
      <Link to={href}>
        {label} <span className="font-sans">→</span>
      </Link>
    </span>
  );
};
