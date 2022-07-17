const seleccionarColor = document.querySelector('#seleccionar-color')
const colorEsquema = document.querySelector('#color-esquema')
const mainColor = document.querySelector('#main-color')
const footerHex = document.querySelector('#footer-hex')
const btn = document.querySelector('#btn')

function generarColores() {
  fetch(`https://www.thecolorapi.com/scheme?hex=${seleccionarColor.value.slice(1)}&mode=${colorEsquema.value}`)
    .then(res => res.json())
    .then( data => {
      let colorHtml = ''
      let footerHtml = ''
      data.colors.forEach(color => {
        colorHtml += 
        `
        <div style="background-color: ${color.hex.value};" class="color"></div>
        `
        footerHtml += 
        `
        <p class="color-code">${color.hex.value}</p>
        `
      });
      mainColor.innerHTML = colorHtml
      footerHex.innerHTML = footerHtml
    })

}
generarColores()
btn.addEventListener('click', generarColores)