import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown, faEye, faMoneyBillWaveAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

import './Product.css';

export default ({ name, brand, price = 0, off = 0, min = 0, max = 0, img, promo = false }) => <div className={`Product h-100 ${promo ? "text-small " : "px-3 "}pb-3`}>
    <div className="d-flex flex-column shadow-sm content h-100">
        <div className="rounded-top p-2 bg-white position-relative">
            {promo && <div className="position-absolute d-inline-block rounded-bottom bg-lightgreen px-3 py-2 text-white" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
                Flash Sales
            </div>}

            <div className="embed-responsive embed-responsive-1by1 position-relative">
                <div className="position-absolute w-100 h-100 d-flex flex-column" style={{ top: 0, left: 0 }}>
                    <div className="d-flex justify-content-between">
                        {brand && <div>
                            <img src={brand} style={{ height: 16, objectFit: 'contain', width: 'auto' }} />
                        </div>}

                        <div className="ml-auto">
                            <FontAwesomeIcon icon={faHeart} className="text-orange" />
                        </div>
                    </div>

                    <div className="flex-fill pt-3">
                        <div className="embed-responsive embed-responsive-4by3 position-relative" style={{ overflow: 'visible' }}>
                            <div className="img position-absolute w-100 h-100" style={{ top: 0, left: 0, background: `url("${img}") no-repeat center`, backgroundSize: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="with-half-circles bg-white px-2">
            <div />
            <div className="separator" />
            <div />
        </div>

        <div className="flex-fill p-2 bg-white d-flex flex-column justify-content-between">
            <div className="mb-2 text-500 text-poppins">
                {name}
            </div>

            <div>
                <div className="d-flex">
                    <div>
                        <div>
                            <span className="text-darkgreen text-large text-700">{price * (1 - off / 100)}</span> <span className="text-darkgreen-50">XAF</span>
                        </div>

                        <div className="text-darkgreen-50 d-inline-block" style={{ textDecoration: 'line-through' }}>
                            <span>{price}</span> <span className="text-small">XAF</span>
                        </div>
                    </div>

                    <div className="ml-auto d-flex justify-content-end text-x-small">
                        {off > 0 && <div>
                            <div className="rounded bg-lightgreen-50 text-darkgreen mr-3 px-3 py-2">
                                -{off}% Off
                        </div>
                        </div>}

                        <div>
                            <div className="bg-darkblue text-white rounded px-3 py-2">
                                <FontAwesomeIcon icon={faTruck} fixedWidth className="mr-2" />

                                {min} {min !== max ? `to ${max} ` : ''}days
                        </div>
                        </div>
                    </div>
                </div>

                <div className="d-xl-flex justify-content-center text-poppins btns py-2">
                    <div className="px-1">
                        <Button color="green" className="text-truncate">
                            <FontAwesomeIcon icon={faMoneyBillWaveAlt} fixedWidth />
                            <div className="text d-inline-block">Buy Now</div>
                        </Button>
                    </div>

                    <div className="px-1">
                        <Button color="orange" className="text-truncate">
                            <FontAwesomeIcon icon={faCartArrowDown} fixedWidth />
                            <div className="text d-inline-block">Add to Cart</div>
                        </Button>
                    </div>

                    <div className="px-1">
                        <Button color="blue" className="text-truncate">
                            <FontAwesomeIcon icon={faEye} fixedWidth />
                            <div className="text d-inline-block">More Details</div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;