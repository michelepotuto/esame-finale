
const Button = props => (
    <button 
      {...props}
      className="bg-green-400 text-slate-700 py-2 px-8 rounded hover:bg-green-300">
        {props.children}
    </button>
  )
  
  export default Button;