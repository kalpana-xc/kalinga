export default function SectionHeading({ 
  subtitle, 
  title,
  subtitleClassName = "",
  titleClassName = ""
}) {
  return (
    <>
      {subtitle && (
        <div className={`text-[var(--button-red)] text-base sm:text-lg md:text-xl  pt-3 sm:pt-5 md:pt-8 lg:pt-[50px] font-plus-jakarta-sans font-medium  ${subtitleClassName}`}>
          {subtitle}
        </div>
      )}
      {title && (
        <h2 className={`font-stix  py-3  leading-12 text-[var(--foreground)] ${titleClassName}`}>
          {title}
        </h2>
      )}
    </>
  );
}

