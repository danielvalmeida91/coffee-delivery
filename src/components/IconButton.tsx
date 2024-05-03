interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showIcon: boolean
  icon?: JSX.Element
  customStyle?: string
}

export const IconButton = ({ showIcon, icon, customStyle='p-5' ,...rest}: IconButtonProps) => {
  return(
    <button {...rest} className={customStyle}>
      { showIcon && icon}
    </button>
  )
}