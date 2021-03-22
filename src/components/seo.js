import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function SEO({ description, lang, meta, title }) {
  const defaultTitle = 'Fundacja Mieć Pasje'
  const metaDescription =
    'Głównym celem fundacji jest prowadzenie działalności kulturalnej z zakresu sztuki oraz ochrony dóbr kultury i dziedzictwa narodowego, wspieranie rozwoju twórczości ludowej, rzemieślniczej i rękodzieła, odtwarzanie dorobku ginących zawodów.'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
