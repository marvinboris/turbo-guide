import React, { useState } from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { checkValidity } from '../../../shared/utility';

import './Input.css';

export default ({ id, icon, addon, onChange, className = '', name, type = 'text', required, readonly, placeholder, value = '', validation = {}, append, children, dark = false, bonus }) => {
    const [touched, setTouched] = useState(false);

    const inputChangedHandler = e => {
        setTouched(true);
        onChange(e);
    }

    return <FormGroup className={`Input ${className}`}>
        <InputGroup className={`bg-${dark ? "grayblue" : "white border border-soft"} rounded-6 d-flex align-items-center`} size="lg">
            <InputGroupAddon addonType="prepend">
                <InputGroupText className="bg-transparent d-block border-left-0 border-top-0 border-bottom-0 border-soft px-4 py-0 my-1 text-center text-16" style={{ width: 77 }}>
                    {icon ? <FontAwesomeIcon className="text-light mx-1" fixedWidth icon={icon} /> : addon}
                </InputGroupText>
            </InputGroupAddon>

            {children ?
                <CustomInput valid={touched && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} type={type} id={name} name={name} required={required} readOnly={readonly} value={value} className={`bg-${dark ? "grayblue" : "white"} border-0 text-small text-secondary h-100 px-4 py-3`} placeholder={placeholder}>{children}</CustomInput>
                :
                <Input valid={touched && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} id={id} type={type} name={name} required={required} readOnly={readonly} value={value} className={"bg-transparent border-0 text-small text-secondary h-100 px-4 py-3"} placeholder={placeholder} />
            }

            {append ? <InputGroupAddon addonType="append">
                <InputGroupText className="bg-transparent border-0 text-secondary text-small px-4">
                    {append}
                </InputGroupText>
            </InputGroupAddon> : null}
        </InputGroup>

        {bonus}
    </FormGroup>;
};