import styles from './alert.module.css';
import {clsx} from 'clsx';
import React from "react";

export default function Alert({children, type}: { children: React.ReactNode, type: string }) {
    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
        </div>
    );
}