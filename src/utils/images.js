import nVim from '../assets/Images/Nvim.jpg'
import liferayTraining from '../assets/Images/Liferay_Training.jpg'
import portfolio from '../assets/Images/Portfolio.jpg'
import travelAgency from '../assets/Images/Travel_Agency.jpg'

const images = [nVim, liferayTraining, portfolio, travelAgency]

export const getImgURL = (img) => {
  return images.find((image) => image.includes(img))
}
