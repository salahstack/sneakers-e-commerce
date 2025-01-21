
const Button = ({ children, classes = '', variant = 'filled', color = 'primary', ...rest }) => {
  return (
    <button className={`btn ${variant} ${color} ${classes}`} {...rest}>
        {children}
    </button>
  )
}

const IconButton = ({ children, classes = '', ...rest }) => {
  return <button className={`icon-btn ${classes}`} {...rest}>
    {children}
  </button>
}

export { Button, IconButton }