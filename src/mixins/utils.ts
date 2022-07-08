const Utils = {
  methods: {
    removeAccents: (str: string) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
    searchNameFormatted: (str: string) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
    }
  }
}
export default Utils
