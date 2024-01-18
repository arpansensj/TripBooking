const Card = ({imgURL}) => {
  return (
    <div className="h-[200px] w-[150px] rounded-xl bg-blue-500 overflow-hidden">
        <img className="object-cover" src={imgURL} alt="" />
    </div>
  )
}

export default Card