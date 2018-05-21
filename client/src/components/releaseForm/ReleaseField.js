// @flow
import React from 'react';

type Props = {
    input: any,
    label: string,
    meta: { error: boolean, touched: boolean },
};

export default ({ input, label, meta: { error, touched } }: Props) => (
    <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px' }} />
        <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
        </div>
    </div>
);
