module.exports = {
  reactStrictMode: true,
  webpack5: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/erense2en',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/erense2en',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/1476396692575223921',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/intl-tr/artist/3JUlkJ2xUWlMw7v9PFeRf1',
        permanent: true,
      },
    ]
  },
}
