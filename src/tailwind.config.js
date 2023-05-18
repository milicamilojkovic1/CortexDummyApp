module.exports = {
    purge: [],
    theme: {
      extend: {},
    },
    variants: {
      opacity: ({ after }) => after(['disabled'])
    },
    plugins: [],
  }