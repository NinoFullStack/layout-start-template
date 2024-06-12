const multiselect = elementDOM => {
  const btns = elementDOM.querySelectorAll('button[data-item]')

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()

      btn.classList.toggle('multiselect-item--active')
    })
  })
}

multiselect(document.querySelector('#user-interests'))
multiselect(document.querySelector('#user-countries'))
multiselect(document.querySelector('#main-audience'))
