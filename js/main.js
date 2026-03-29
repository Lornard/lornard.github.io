function iniciarCarrossel()
{
  const myCarouselElement = document.getElementById('carroselEntrada')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    wrap: false
  })
}
