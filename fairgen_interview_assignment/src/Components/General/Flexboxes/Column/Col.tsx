import { ColProps } from './IColProps';
import '../../../../Styles/GeneralClasses/generalClasses.css';

function Col({ styles, children, onAction }: ColProps) {
    const classes = 'flex-col ' + styles;

    return (
        <div className={classes} onClick={onAction && (() => onAction())}>
            {children}
        </div >
    );
}

export default Col;