export default function GlobalRedPlainButton({ children, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--button-red)] px-8 py-4 rounded-xl shadow-lg text-white font-sans text-base font-semibold whitespace-nowrap transition-all duration-300 hover:opacity-90 hover:shadow-xl ${className}`}
    >
      {children}
    </button>
  );
}

