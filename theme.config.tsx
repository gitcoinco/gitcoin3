import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Gitcoin 3.0</span>,
  project: {
    link: 'https://github.com/gitcoinco/gitcoin3/',
  },
  docsRepositoryBase: 'https://github.com/gitcoinco/gitcoin3/tree/master',
  footer: {
    text: 'Gitcoin 3.0',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Gitcoin 3.0'
    }
  }
}

export default config
