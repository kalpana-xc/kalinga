export default function Cards({ cards = [], stackRef }) {

  return (
    <>

      <div className="flex justify-center md:justify-end mt-6 md:mt-0 -mb-28 z-2">
        <div className="w-full max-w-[420px]">
          <div style={{ width: '100%', height: '480px' }}>
            <Stack
              ref={stackRef ?? null}
              randomRotation={false}
              sensitivity={180}
              sendToBackOnClick={false}
              autoplay={true}
              cards={cards.map((card, i) => (
                <img
                  key={i}
                  src={card.image}
                  alt={card.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ))}
            />
          </div>
          <div className="flex justify-center gap-3 -mt-10 mb-10 z-10 relative">
            <button
              type="button"
              onClick={() => stackRef?.current?.triggerNext('left')}
              className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors shadow-md"
              aria-label="Previous placement"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => stackRef.current?.triggerNext('right')}
              className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors shadow-md"
              aria-label="Next placement"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}