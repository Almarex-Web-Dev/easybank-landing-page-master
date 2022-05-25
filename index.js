//  select the btns

const btnBar = document.querySelector('.btn-bar')
const btnTimes = document.querySelector('.btn-times')
const btnsContainer = document.querySelector('.btns-container')

const linksContainer = document.querySelector('.links-container')
const navLinkWrapper = document.querySelector('.nav-links-wrapper')

const toggleIcon = () => {
  const linksHeight = linksContainer.getBoundingClientRect().height
  const navHeight = navLinkWrapper.getBoundingClientRect().height

  if (linksHeight === 0) {
    linksContainer.style.height = `${navHeight}px`
    btnBar.style.display = 'none'
    btnTimes.style.display = 'block'
  } else if (linksHeight === navHeight) {
    linksContainer.style.height = 0
    btnTimes.style.display = 'none'
    btnBar.style.display = 'block'
  }
}

btnsContainer.addEventListener('click', toggleIcon)
