
const TextField = ({ name, type = 'text', label, placeholder, classes }) => {
  return (
    <div className="text-field-wrapper">
      <label className="label-text"htmlFor={name}>{label}</label>
      <input className={`text-field ${classes}`} type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default TextField;