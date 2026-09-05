import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[0.95rem] font-medium rounded-sm transition-colors duration-250 focus-visible:outline-none";

const variants = {
  primary: "bg-ink text-paper hover:bg-accent-dark",
  secondary: "border border-ink/80 text-ink hover:border-accent hover:text-accent",
  ghost: "text-accent hover:text-accent-dark underline underline-offset-4",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
