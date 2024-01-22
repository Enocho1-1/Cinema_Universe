import blur from "../../assets/blurload.jpg"

export const BlurEffect = ({css}) => {
  return (
    <div className={`${css} animate-pulse cursor-none`} style={{backgroundImage: `url(${blur})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></div>
  )
}
