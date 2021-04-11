import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Table as BSTable, Button, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFileExcel, faFilePdf, faFileCsv, faPrint, faAngleDoubleLeft, faChevronLeft, faChevronRight, faAngleDoubleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { updateObject } from '../../../../../shared/utility';

let timeout;

class Table extends Component {
    state = {
        show: 10,
        search: '',
        page: 1,
        pageNumber: 1,
        pageFirst: 1,
        pageSecond: 2,
        pageLast: 3,
    }

    componentDidUpdate(prevProps) {
        const { total, show } = this.props;
        if (prevProps.total !== total || prevProps.show !== show) this.setState({ pageNumber: Math.ceil(total / show) });
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        const { page, show, search } = this.state;
        this.firstPageHandler();
        if (name === 'show') {
            this.props.get(page, value, search);
            return this.setState({ show: value });
        }
        if (name === 'search') {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.props.get(page, show, value);
                clearTimeout(timeout);
            }, 1000);
            return this.setState({ search: value });
        }
    }

    previousPageHandler = () => {
        const { page } = this.state;
        if (page <= 1) return;
        this.pageChangeHandler(page - 1);
    }

    nextPageHandler = () => {
        const { page, pageNumber } = this.state;
        const lastPage = pageNumber;
        if (page >= lastPage) return;
        this.pageChangeHandler(page + 1);
    }

    firstPageHandler = () => {
        const { page } = this.state;
        if (page <= 1) return;
        this.pageChangeHandler(1);
    }

    lastPageHandler = () => {
        const { page, pageNumber } = this.state;
        const lastPage = pageNumber;
        if (page >= lastPage) return;
        this.pageChangeHandler(lastPage);
    }

    pageChangeHandler = page => {
        const { show, search, pageNumber } = this.state;
        const lastPage = pageNumber;
        let pageFirst;
        if (page === 1) pageFirst = 1;
        else if (page === lastPage) pageFirst = lastPage - 2;
        else pageFirst = page - 1;
        this.props.get(page, show, search);
        const pageSecond = pageFirst + 1, pageLast = pageFirst + 2;
        this.setState({ page, pageFirst, pageSecond, pageLast });
    }

    onClick = e => {
        e.preventDefault();

        const url = e.target.href;
        this.exportData(url);
    };

    exportData = async url => {
        const { data } = this.props;
        const format = url.split('/')[url.split('/').length - 1];
        const name = title + '.' + format;
        const token = localStorage.getItem('token');

        try {
            const formData = new FormData();

            formData.append('data', data);
            formData.append('name', name);

            const res = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: formData,
                headers: {
                    Authorization: token
                }
            });

            const resData = await res.blob();

            const downloadLink = URL.createObjectURL(resData);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = downloadLink;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(downloadLink);
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const {
            fields, array, loading = false, total = 0, limit, bordered, xs = 12, sm = 12, md = 12, lg = 12, xl = 12, icon, title, subtitle, add, link, className = '', dark = false, borderless, innerClassName = '', outerClassName = '', containerClassName = '', addon, p0, select, children, selectHandler, style,
            content: {
                cms: {
                    pages: { components: { list: { all, first, last, loading: loading_, print, pdf, csv, excel, search: search_, show: show_, sl, showing, from, entries: { singular, plural } } } }
                }
            }
        } = this.props;
        const { show, search, page, pageFirst, pageSecond, pageLast, pageNumber } = this.state;

        const titles = fields.map(({ name, fixed }) => <th className={"align-middle text-nowrap bg-" + (dark ? "darkblue" : "soft")} style={fixed ? { position: 'sticky', right: 0 } : {}} key={name}>{name}</th>);
        titles.unshift(<th className="text-center align-middle" key="#">{sl}</th>);
        if (select) titles.unshift(<th className="align-middle text-center" key="select_all">
            <input type="checkbox" onClick={selectHandler} className="select_all" />
        </th>);

        const filteredArray = array;
        const limitedArray = filteredArray;

        const content = limitedArray.map((item, index) => {
            if (limit && index >= limit) return null;
            let inside = [<th className="text-center align-middle" key={`primary${index}`}>{(show === 'All' ? 0 : (page - 1) * show) + index + 1}</th>];
            if (select) inside.unshift(<th className="text-center align-middle" key={`secondary${index}`}>
                <input type="checkbox" value={item._id} />
            </th>);
            fields.forEach(({ key, minWidth, fixed }) => {
                inside.push(<td className="align-middle text-nowrap" style={updateObject({ minWidth, borderColor: dark ? '#606060' : '#DEE2E6' }, fixed ? { position: 'sticky', right: 0, backgroundColor: dark ? '#1B223F' : '#F4F4F4' } : {})} key={key}>{item[key]}</td>);
            });

            return <tr className="align-middle" key={index + 1}>{inside}</tr>;
        });

        const modulo = total % show;
        const entries = total === 0 ? total : (modulo !== 0 ? modulo : show);

        return (
            <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={outerClassName}>
                <input type="hidden" id="table-show" value={show} />
                <input type="hidden" id="table-page" value={page} />
                <input type="hidden" id="table-search" value={search} />

                <div className={`rounded-4 d-flex align-items-center mb-4 py-4 px-5 bg-${dark ? "grayblue" : "orange-10"}`}>
                    <div className="d-flex align-items-center">{
                        icon ? <FontAwesomeIcon fixedWidth className="mr-4 text-30 text-orange-20" icon={icon} size="lg" /> : null}

                        <div>
                            <div className={`text-${dark ? "light" : "orange"} text-700 text-20 mb-1`}>{title}</div>

                            <div className="text-10">{subtitle}</div>
                        </div>
                    </div>

                    {add && <Link className="ml-auto" to={link}>
                        <Button color="green" className="rounded-2 py-2 text-16 text-500 px-4">
                            <FontAwesomeIcon icon={faPlus} fixedWidth className="mr-3" />

                            {add}
                        </Button>
                    </Link>}
                </div>

                <div className="row justify-content-center">
                    <div className={`${!addon && "col-lg-9"} ${containerClassName}`}>
                        <div className={`d-flex flex-column h-100 ${dark ? "bg-grayblue text-light " : " "}${className}`} style={style}>
                            <div className={`px-4 pt-4 text-700 position-relative`}>
                                <div className="d-flex align-items-center">
                                    <div className="text-18 text-400">
                                        {title}
                                    </div>

                                    <div className="ml-auto d-flex align-items-center">
                                        <div className={`d-flex align-items-center text-${dark ? "light" : "secondary"} rounded-2`}>
                                            <div className="border-right border-border-50">
                                                <div className={`px-3 py-2 font-weight-bold h-100 bg-${dark ? "darkblue" : "soft"}`}>{show_}</div>
                                            </div>

                                            <Input type="select" name="show" onChange={this.inputChangedHandler} className={`px-3 py-2 text-center rounded-0 h-100 d-block text-reset border-bottom-0 border-${dark ? "darkblue" : "soft"} bg-${dark ? "darkblue" : "soft"}`} style={{ width: '5rem' }}>
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                                <option value="All">{all}</option>
                                            </Input>
                                        </div>

                                        <div className={`bg-${dark ? "darkblue text-light" : "soft text-secondary"} d-flex justify-content-around align-items-center font-weight-bold py-3 mx-3`}>
                                            <a href="/api/export/xlsx" onClick={this.onClick} className="px-2 export text-decoration-none text-truncate text-reset"><FontAwesomeIcon icon={faFileExcel} className={`text-${dark ? "white" : "darkblue"} mr-2`} />{excel}</a>
                                            <a href="/api/export/pdf" onClick={this.onClick} className="px-2 export text-decoration-none text-truncate text-reset"><FontAwesomeIcon icon={faFilePdf} className="text-danger mr-2" />{pdf}</a>
                                            <a href="/api/export/csv" onClick={this.onClick} className="px-2 export text-decoration-none text-truncate text-reset"><FontAwesomeIcon icon={faFileCsv} className="text-green mr-2" />{csv}</a>
                                            <a href="/api/export/pdf" onClick={this.onClick} className="px-2 export text-decoration-none text-truncate text-reset"><FontAwesomeIcon icon={faPrint} className="text-primary mr-2" />{print}</a>
                                        </div>

                                        <Input type="search" name="search" onChange={this.inputChangedHandler} className={`bg-${dark ? "darkblue" : "soft text-secondary"} border-0 rounded-2`} placeholder={`${search_}...`} />
                                    </div>
                                </div>
                            </div>

                            <div className={`flex-fill d-flex flex-column ${!p0 ? "p-4" : "p-0"}`}>
                                <div className="table-responsive flex-fill">
                                    <BSTable dark={dark} bordered={bordered} hover borderless={borderless} className={`bg-${dark ? "darkblue" : ""} ${innerClassName}`}>
                                        <thead className={dark ? "text-light" : "bg-soft text-secondary"}><tr>{titles}</tr></thead>
                                        <tbody className={dark ? "bg-darklight-50 text-light" : "bg-soft-50 text-secondary"}>{!loading && content}</tbody>
                                    </BSTable>
                                </div>

                                {loading && <Col xs={12} className="text-center">
                                    <div className="text-center py-3">{loading_}...</div>
                                </Col>}

                                <div>
                                    {children}
                                </div>

                                <div>
                                    <div>{showing} {((+page !== pageNumber) && (+page > 1)) ? show : entries} {from} {total} {total > 1 ? plural : singular}.</div>

                                    <div className="pt-2 d-flex justify-content-end">
                                        {show === "All" ? null : <ul className="pagination btn-group">
                                            {page === 1 ? null :
                                                <>
                                                    <li className="btn btn-yellow" onClick={this.firstPageHandler}><FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-2" />{first}</li>
                                                    <li className="btn btn-darkblue text-secondary" onClick={this.previousPageHandler}><FontAwesomeIcon icon={faChevronLeft} /></li>
                                                </>
                                            }
                                            <li className={"btn btn-darkblue " + (page === pageFirst ? 'text-700 active' : 'secondary')} onClick={() => this.pageChangeHandler(pageFirst)}>{pageFirst}</li>
                                            {pageNumber > 1 ?
                                                <>
                                                    <li className={"btn btn-darkblue " + (page === pageSecond ? 'text-700 active' : 'secondary')} onClick={() => this.pageChangeHandler(pageSecond)}>{pageSecond}</li>
                                                    {pageNumber > 2 ?
                                                        <li className={"btn btn-darkblue " + (page === pageLast ? 'text-700 active' : 'secondary')} onClick={() => this.pageChangeHandler(pageLast)}>{pageLast}</li>
                                                        : null}
                                                    {page === pageNumber ? null :
                                                        <>
                                                            <li className="btn btn-darkblue text-secondary" onClick={this.nextPageHandler}><FontAwesomeIcon icon={faChevronRight} /></li>
                                                            <li className="btn btn-myprimary" onClick={this.lastPageHandler}>{last}<FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" /></li>
                                                        </>
                                                    }
                                                </>
                                                : null}
                                        </ul>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {addon}
                </div>
            </Col>
        );

    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Table);