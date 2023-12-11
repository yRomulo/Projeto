function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const txt = document.querySelector("#profile p")

  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-light.png")
    txt.setAttribute("p", "@gokuDeus") // tentativa de mudar o texto
  }else{
    img.setAttribute("src", "./assets/avatar.png")
  }
}
