export default function SectionHeading({ 
  subtitle, 
  title,
  subtitleClassName = "",
  titleClassName = " ",
  subtitleTextColor = "text-[var(--button-red)]"
}) {
  return (
    <>
      {subtitle && (
        <h5 className={`${subtitleTextColor}  text-base sm:text-lg md:text-xl font-plus-jakarta-sans font-medium mb-4  ${subtitleClassName}`}>
          {subtitle}
        </h5>
      )}
      {title && (
        <h2 className={`font-stix  mb-2 text-[var(--foreground)]  ${titleClassName}`}>
          {title}
        </h2>
      )}
    </>
  );
}

