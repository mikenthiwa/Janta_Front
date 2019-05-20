import React from "react";

const Button = ({value, className, icon, onClick, id}) => {
  return (
    <div className={className} onClick={onClick} id={id}>
      {icon ? <i className={icon} />: ''}
      <span id={id}>{value}</span>
    </div>
  )


};
export default Button;