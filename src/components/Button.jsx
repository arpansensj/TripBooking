const Button = ({label, icon}) => {
  return (
    <button className="bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2">
         
{label}
{icon}
    </button>
  )
}

export default Button