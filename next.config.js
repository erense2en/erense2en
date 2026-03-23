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
        source: '/twitter',
        destination: 'https://twitter.com/erense2en',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://ptb.discord.com/users/1476396692575223921',
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
