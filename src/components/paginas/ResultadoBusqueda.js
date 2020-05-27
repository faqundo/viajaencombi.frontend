import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = (props) => {
    const columns = [
        {
            label: '#',
            field: 'id',
            sort: 'asc'
        },
        {
            label: 'Empresa',
            field: 'first',
            sort: 'asc'
        },
        {
            label: 'Salida',
            field: 'last',
            sort: 'asc'
        },
        {
            label: 'Llegada',
            field: 'handle',
            sort: 'asc'
        },
        {
            label: 'Mail',
            field: 'mail',
            sort: 'asc'
        },
        {
            label: 'Segundo',
            field: 'segundo',
            sort: 'asc'
        },
        {
            label: 'Handle',
            field: 'handle',
            sort: 'asc'
        }
    ];

    const rows_regular_btn = [
        {
            'id': 1,
            'first': <MDBBtn style={{backgroundColor :"#9d1d96" , color : "white"}} size="sm">Button</MDBBtn>,
            'last': 'Otto',
            'handle': '@mdo',
            'mail': '@fsat',
            'segundo': '@faast',
            'handle': '@fdat'
        },
        {
            'id': 2,
            'first': 'Jacob',
            'last': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
            'mail': '@fat',
            'segundo': '@fsat',
            'handle': '@faast',
            'handle': '@fdat'
        },
        {
            'id': 3,
            'first': 'Larry',
            'last': 'the Bird',
            'handle': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
            'handle': '@fsaat',
            'handle': '@faasdasdast',
            'handle': '@fdat'
        },
        {
            'id': 4,
            'first': 'Larry',
            'last': 'the Bird',
            'handle': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
            'handle': '@fsat',
            'handle': '@faast',
            'handle': '@fasdasddat'
        },
        {
            'id': 5,
            'first': 'Larry',
            'last': 'the Bird',
            'handle': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
            'handle': '@fsat',
            'handle': '@faast',
            'handle': '@fdat'
        },
        {
            'id': 6,
            'first': 'Larry',
            'last': 'the Bird',
            'handle': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
            'handle': '@fsat',
            'handle': '@faast',
            'handle': '@fdat'
        },
        {
            'id': 7,
            'first': 'Larry',
            'last': 'the Bird',
            'handle': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
            'handle': '@fsat',
            'handle': '@faast',
            'handle': '@fdat'
        }

    ];

    return (
        <MDBTable btn >
            <MDBTableHead columns={columns} 
            style={{backgroundColor : "#3f3f3f" , color : "white" , fontFamily: "Montserrat,sans-serif" }}/>
            <MDBTableBody rows={rows_regular_btn} />
        </MDBTable>
    );
};

export default TablePage;