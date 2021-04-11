// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className, id} = bannerDetails
  return (
    <li className={className} key={id}>
      <div className="inner-container">
        <h1 className="title">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button" type="button">
          Know more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
