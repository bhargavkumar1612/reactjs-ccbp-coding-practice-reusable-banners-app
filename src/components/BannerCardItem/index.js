// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className, id} = bannerDetails
  return (
    <div className={className} key={id}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
