function toggleMode () {
    const html = document.documentElement
    html.classList.toggle('light')

   const img = document.querySelector('#profile img')


   if(html.classList.contains('light')) {

     img.setAttribute('src', './assets/avatar-light.png', 'alt', 'Foto do Mayk de óculos de sol')
   } else {

     img.setAttribute('src', './assets/avatar.png')
   }
}