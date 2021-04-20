import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Form, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

export default ({ onSubmit, xs = 12, sm = 12, md = 12, lg = 12, xl = 12, icon, title, subtitle, className = '', dark = false, innerClassName = '', outerClassName = '', p0, children, style, id, list, link, disabled }) => {
    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={outerClassName}>
            <div className={`rounded-4 d-flex align-items-center mb-5 py-4 px-5 bg-${dark ? "grayblue" : "orange-10"} ${className}`}>
                <div className="d-flex align-items-center">{
                    icon ? <FontAwesomeIcon fixedWidth className="mr-4 text-30 text-orange-20" icon={icon} size="lg" /> : null}

                    <div>
                        <div className={`text-${dark ? "light" : "orange"} text-700 text-20 mb-1`}>{title}</div>

                        <div className="text-10">{subtitle}</div>
                    </div>
                </div>

                {list && <Link to={link} className="ml-auto">
                    <Button color="green" className="rounded-2 py-2 text-16 text-500 px-4">
                        <FontAwesomeIcon icon={faTasks} fixedWidth className="mr-3" />

                        {list}
                    </Button>
                </Link>}
            </div>

            <div className={`d-flex flex-column ${dark ? "text-light bg-grayblue" : ""} ${className}`} style={style}>
                <div className={`flex-fill d-flex flex-column`}>
                    <div className="flex-fill">
                        {disabled ? <div id={id} className={innerClassName} encType="multipart/form-data">
                            {children}
                        </div> : <Form onSubmit={onSubmit} id={id} className={innerClassName} encType="multipart/form-data">
                            {children}
                        </Form>}
                    </div>
                </div>
            </div>
        </Col>
    );
};