import nVim from '../assets/Images/Nvim.jpg'
import liferayTraining from '../assets/Images/Liferay_Training.jpg'
import portfolio from '../assets/Images/Portfolio.jpg'
import travelAgency from '../assets/Images/Travel_Agency.jpg'
import monorepo from '../assets/Images/Monorepo.jpg'
import mernDocker from '../assets/Images/Mern_Docker.jpg'

const images = [
  nVim,
  liferayTraining,
  portfolio,
  travelAgency,
  monorepo,
  mernDocker
]

export const getImgURL = (img) => {
  return images.find((image) => image.includes(img))
}
