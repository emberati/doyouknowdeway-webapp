function saveActiveRent(rent) {
    localStorage.setItem(
      'rents.activeRent',
      JSON.stringify(rent)
    )
  }
  
  function loadActiveRent() {
    return JSON.parse(localStorage.getItem('rents.activeRent')) || {
      status: 'Корзина не собрана!',
      rentStart: '',
      rentEnd: '',
      items: [],
    }
  }

  function saveArchiveRents(rents) {
    localStorage.setItem(
      'rent.archiveRents',
      JSON.stringify(rents)
    )
  }

  function loadArchiveRents() {
    return JSON.parse(localStorage.getItem('rent.archiveRents')) || []
  }

  export {
    loadActiveRent,
    saveActiveRent,
    saveArchiveRents,
    loadArchiveRents
  }