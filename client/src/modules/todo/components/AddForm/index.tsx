import React, { useState, useRef, useCallback } from 'react';
import { Input, Button } from 'antd';
import styles from './style.local.less';

type TProps = {
    handleSubmitForm: (text: string) => void
}
export function AddForm({ handleSubmitForm }: TProps): JSX.Element {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');
    const handleChange = useCallback((e) => {
        const text = e.target.value;
        setValue(text);
    }, []);
    const handleSubmit = useCallback(() => {
        handleSubmitForm(value);
        setValue('');
    }, [value, handleSubmitForm]);
    return (
        <div className={styles.addForm}>
            <Input value={value} className={styles.addFormInput} onChange={handleChange} ref={inputRef} />
            <Button disabled={!value} type="primary" onClick={handleSubmit}>Add</Button>
        </div>
    );
}
