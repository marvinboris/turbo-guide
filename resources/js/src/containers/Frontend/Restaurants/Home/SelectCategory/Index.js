import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

import './SelectCategory.css';

export default ({ categories, cms }) => {
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState('');

    const toggle = () => setModal(!modal);

    const click = (e, id) => {
        toggle();

        e.preventDefault();
        $('html, body').animate({ scrollTop: document.querySelector('.Home .embed-responsive').offsetHeight + document.getElementById('category-' + id).offsetTop }, 200);

        setSearch('');
    }

    const searchChangeHandler = e => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <div style={{ cursor: 'pointer' }} onClick={toggle} className="bg-orange-30 rounded-pill py-2 px-2 text-500 text-orange text-13 position-relative category-select">
                <div className="d-flex mx-1">
                    <div className="text-truncate" id="selected-category" />

                    <div className="position-relative">
                        <div style={{ width: .5, height: 21 }} className="mx-2 bg-orange" />

                        <div className="embed-responsive embed-responsive-1by1 rounded-circle border border-orange bg-white position-absolute" style={{ width: 4, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faFilter} />
                    </div>
                </div>
            </div>

            <Modal isOpen={modal} toggle={toggle} className="SelectCategory">
                <ModalHeader toggle={toggle} className="text-17 text-500">{cms.select_category}</ModalHeader>

                <ModalBody className="p-0">
                    <ListGroup flush>
                        <ListGroupItem className="d-flex align-items-center">
                            <div className="mr-3 text-17 text-light"><FontAwesomeIcon icon={faSearch} /></div>

                            <div className="flex-fill">
                                <input type="search" name="search" className="border-0 text-poppins border-transparent p-0 m-0 d-block text-13 w-100" style={{ outline: 'none' }} placeholder={`${cms.search}...`} value={search} onChange={searchChangeHandler} />
                            </div>
                        </ListGroupItem>

                        {categories.filter(category => (category.name || '').toLowerCase().includes(search.toLowerCase())).map(category => <a key={`ListGroupItem-${category.id}`} href={"#category-" + category.id} id={"select-category-" + category.id} className={"list-group-item select-category text-reset text-decoration-none" + ($('#nav-category-' + category.id).hasClass('activated') ? " active" : "")} onClick={e => click(e, category.id)} style={{ cursor: 'pointer' }}>
                            <ListGroupItemHeading className="text-13 text-500">{category.name}</ListGroupItemHeading>

                            <ListGroupItemText className="text-10 text-300 m-0">
                                {category.description}
                            </ListGroupItemText>
                        </a>)}
                    </ListGroup>
                </ModalBody>
            </Modal>
        </div>
    );
}