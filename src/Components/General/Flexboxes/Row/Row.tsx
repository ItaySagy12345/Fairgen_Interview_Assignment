import { RowProps } from './IRowProps';
import '../../../../Styles/GeneralClasses/generalClasses.css';

function Row({ styles, children, onAction }: RowProps) {
    const classes = 'flex-row ' + styles;

    return (
        <div className={classes} onClick={onAction && (() => onAction())}>
            {children}
        </div>
    );
}

export default Row;