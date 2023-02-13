import '../css/Flag.css'

const Flag = ({ image, isSelected, ...props }) => (
  <img
    alt="flag"
    width="25px"
    height="15px"
    src={image}
    className={isSelected ? 'flag selected' : 'flag'}
    {...props}
  />
)

export default Flag
