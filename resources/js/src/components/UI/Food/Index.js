import React from 'react';
import { faExclamationCircle, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './Food.css';

export default ({ img, name, description, reference, meal, addon, qty, add, sub, id, children }) => {
    const content = <>
        <div className="pb-1 d-flex">
            <div className="pr-2">
                <div className="mr-1 position-relative">
                    <div className="embed-responsive embed-responsive-1by1 rounded-8 shadow" style={{ width: 83, background: `url("${img}") no-repeat center`, backgroundSize: 'cover' }} />

                    {addon && qty > 0 && <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}>
                        <div className="rounded-circle border border-2 border-green bg-white d-flex justify-content-center align-items-center text-green text-300 text-8" style={{ width: 18, height: 18 }}>{qty}</div>
                    </div>}
                </div>
            </div>

            <div className="flex-fill">
                <div className="pb-1 position-relative">
                    <div className="d-flex align-items-center">
                        <div className={`text-12 text-500 text-truncate ${addon ? "addon-limit" : ""} ${meal ? "meal-limit" : ""}`}>
                            {name}
                        </div>

                        <div className="mx-2 text-11 text-orange">
                            <FontAwesomeIcon icon={faExclamationCircle} />
                        </div>

                        <div>
                            <div className="px-1 bg-green text-white text-5 rounded-pill" style={{ paddingTop: 2, paddingBottom: 2 }}>
                                {reference}
                            </div>
                        </div>

                        {addon && <div className="ml-auto pl-2">
                            <div className="rounded-pill py-1 px-1 bg-orange-25 d-flex align-items-center text-10 text-orange" style={{ width: 63 }}>
                                <div>
                                    <FontAwesomeIcon icon={faMinusCircle} onClick={sub} />
                                </div>

                                <div className="mx-1 flex-fill text-center">
                                    <div className="px-2 bg-soft-70 text-7 text-secondary rounded-pill" style={{ paddingTop: 2, paddingBottom: 2 }}>{qty}</div>
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faPlusCircle} onClick={add} />
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className="position-absolute d-flex align-items-center" style={{ bottom: 0, left: 0 }}>
                        <div>
                            <div className="bg-orange" style={{ width: 29, height: .5 }} />
                        </div>

                        <div style={{ margin: '0 2.5px' }}>
                            <div className="embed-responsive embed-responsive-1by1 rounded-circle border border-orange bg-white" style={{ width: 4 }} />
                        </div>

                        <div>
                            <div className="bg-orange" style={{ width: 29, height: .5 }} />
                        </div>
                    </div>
                </div>

                <div className="text-10 text-300 text-ellipsis-2 mb-1">{description}</div>

                <div className="text-montserrat">{children}</div>
            </div>
        </div>
    </>;

    return <div className={`Food pb-3 px-3 mb-3 border-bottom border-${addon ? "orange-10" : "soft"}`}>
        {meal ? <Link to={`/meals/${id}/addons`} className="d-block text-decoration-none text-reset">
            {content}
        </Link> : content}
    </div>;
}