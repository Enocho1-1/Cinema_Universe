import blur from "../../assets/blurload.jpg"

export const BlurEffect = ({css}) => {
  return (
    <div className={`${css} animate-pulse`} style={{backgroundImage: `url(${blur})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></div>
  )
}
