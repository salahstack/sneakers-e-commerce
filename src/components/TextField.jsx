
const TextField = ({ name, type = 'text', label, placeholder, classes, ...rest }) => {
  return (
    <div className="text-field-wrapper">
      <label className="label-text"htmlFor={name}>{label}</label>
      <input className={`text-field ${classes}`} type={type} name={name} placeholder={placeholder} {...rest} />
    </div>
  )
}

export default TextField;