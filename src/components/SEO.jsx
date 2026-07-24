import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function SEO({ page }) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const title = t(`seo.${page}.title`)
    const description = t(`seo.${page}.description`)
    document.title = title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', description)
  }, [i18n.language, page, t])

  return null
}
