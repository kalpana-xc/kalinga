export default function GlobalArrowButton({ 
  children, 
  className = "", 
  arrowClassName = "",
  arrowIconClassName = "",
  textClassName = "",
  arrowSize = 20,
  variant = "default", // "default", "no-arrow", "transparent", "white"
  icon, // optional custom icon component
  onClick 
}) {
  const showArrow = variant === "default" || variant === "transparent" || variant === "white";
  
  // Base button classes
  const baseButtonClasses = "group px-3 py-2 rounded-xl font-sans text-base font-semibold transition-all duration-300 cursor-pointer flex items-center w-fit";
  
  // Variant-specific button classes
  const variantButtonClasses = {
    default: "bg-[var(--button-red)] hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] text-white hover:opacity-90 hover:shadow-2xl",
    "no-arrow": "bg-[var(--button-red)] hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] text-white hover:opacity-90 hover:shadow-2xl",
    transparent: "bg-transparent text-black",
    // White pill with black text, orange square arrow (for alumni-style buttons)
    white: "bg-white text-black hover:bg-white hover:text-black hover:shadow-2xl"
  };
  
  // Base arrow container classes (shared across all variants with arrow)
  const arrowContainerClasses = {
    default: "group rounded-lg p-1 flex items-center justify-center relative bg-white group-hover:bg-[var(--button-red)] group-hover:text-white",
    transparent: "group rounded-lg p-1 flex items-center justify-center relative group-hover:bg-[var(--lite-sand)] bg-[var(--button-red)] group-hover:text-white",
    // Solid orange square with white arrow, stays orange on hover
    white: "group rounded-lg p-1 flex items-center justify-center relative bg-[var(--dark-orange-red-light)] group-hover:bg-[var(--dark-orange-red-light)] group-hover:text-white"
  }
  
  // Base arrow icon classes (shared across all variants with arrow)
  const arrowIconClasses = {
    default: "text-[var(--button-red)] group-hover:text-white transition-transform duration-300 group-hover:rotate-45",
    transparent: "text-white group-hover:text-[var(--button-red)] transition-transform duration-300 group-hover:rotate-45",
    // White arrow on orange square
    white: "text-white group-hover:text-white transition-transform duration-300 group-hover:rotate-45",
  }
  const textclassname = variant === "transparent" ? "px-0 pr-2" : "px-2";

  // Reusable default Arrow SVG component
  const DefaultArrowIcon = () => (
    <svg
      width={arrowSize}
      height={arrowSize}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${arrowIconClasses[variant] || arrowIconClasses.default} ${arrowIconClassName}`}
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ArrowIcon = icon
    ? () => (
        <span className={`${arrowIconClasses[variant] || arrowIconClasses.default} ${arrowIconClassName}`}>
          {icon}
        </span>
      )
    : DefaultArrowIcon;
  
  return (
    <button
      onClick={onClick}
      className={`${baseButtonClasses} ${variantButtonClasses[variant] || variantButtonClasses.default} ${showArrow ? '' : ''} ${className}`}
    >
      <p className={`text-left  !font-medium max-w-fit ${textclassname} ${textClassName}`}>{children}</p>
      {showArrow && (
        <span className={`${arrowContainerClasses[variant] || arrowContainerClasses.default} ${arrowClassName}`}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}

