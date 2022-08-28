import React from 'react';
import Swal from 'sweetalert2';

const error = ({ err }) => (err ? <div className="alert alert-danger">{err.message ? err.message : err}</div> : null);

export default function Error({err}) {
    return err ?  Swal.fire({
        // title: err.message || err,
        text: err.message || err,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        // confirmButtonText: 'Yes'
    }) : null;
}