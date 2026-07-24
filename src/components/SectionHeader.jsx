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
        className={`mt-3 font-heading text-3xl font-bold uppercase leading-tight sm:text-5xl ${
          isLight ? 'text-brand-black' : 'text-brand-white'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${isLight ? 'text-brand-steelDark' : 'text-brand-text'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
