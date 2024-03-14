import {MouseEvent} from 'react'
import Button from 'react-bootstrap/Button';
import buttonStyle from './buttonStyle.module.scss'

interface IButton {
    onClick : (event: MouseEvent<HTMLButtonElement>) => void;
    children: any;
}
const ButtonStyle = ({children, onClick}:IButton) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          onClick(event);
        }
      };
    return (
        <Button className={`${buttonStyle.button} my-1 mx-1`} onClick={handleClick}>{children}</Button>
    )
}

export default ButtonStyle;
