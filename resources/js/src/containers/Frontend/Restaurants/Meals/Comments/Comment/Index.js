import { faCheckCircle, faHeart, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Stars from '../../../../../../components/UI/Stars';

const appreciations = [
    { color: 'green', gt: 4, text: 'Positive' },
    { color: 'orange', gt: 3, text: 'Average' },
    { color: 'red', gt: 0, text: 'Negative' },
];

export default ({ name, mark = 0, body }) => {
    const appreciation = appreciations.find(c => c.gt <= mark);

    return <div className="mb-3 pb-2 border-bottom border-soft">
        <div className="mb-2 pb-1 position-relative">
            <div className="d-flex align-items-center">
                <div className="text-12 text-500">
                    {name}
                </div>

                <div>
                    <div className={`mx-2 rounded-pill px-1 text-5 text-${appreciation.color} bg-${appreciation.color}-25`} style={{ paddingTop: 1, paddingBottom: 1 }}>
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />

                        {appreciation.text}
                    </div>
                </div>

                <div>
                    <div className="d-flex">
                        <div className="mr-2 text-8">Ratings</div>

                        <div>
                            <Stars readOnly mark={mark} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-absolute" style={{ bottom: 0, left: 0 }}>
                <div>
                    <div className="bg-orange" style={{ width: 31, height: .5 }} />
                </div>
            </div>
        </div>

        <div className="text-10 text-300 mb-2">{body}</div>

        <div className="text-14 text-right d-none">
            <FontAwesomeIcon icon={faThumbsUp} className="text-green mr-2" />

            <FontAwesomeIcon icon={faThumbsDown} className="text-red mr-2" />

            <FontAwesomeIcon icon={faHeart} className="text-orange" />
        </div>
    </div>
}