function toggleMode () {
    const html = document.documentElement
    html.classList.toggle('light')

   const img = document.querySelector('#profile img')


   if(html.classList.contains('light')) {

     img.setAttribute('src', './assets/ursula.png', 'alt', 'Foto da Ursula')
   } else {

     img.setAttribute('src', './assets/bela.png')
   }
}