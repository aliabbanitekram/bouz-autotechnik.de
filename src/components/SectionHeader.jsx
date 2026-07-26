export default function SectionHeader({ eyebrow, title, text, align = 'left', tone = 'dark' }) {
  const isLight = tone === 'light'

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-heading text-2xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl ${
          isLight ? 'steel-text-dark' : 'steel-text'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-sm leading-6 sm:text-base sm:leading-7 ${isLight ? 'text-brand-steelDark' : 'text-brand-text'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
