import React from "react";
import { useDispatch } from 'react-redux';
import { fetchUpdateRequest } from "../redux/tablesRedux";
import Spinner from 'react-bootstrap/Spinner';
import TableForm from '../views/TableForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { findTable } from "../redux/tablesRedux";

const SingleTable = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const { tableId } = useParams();
    const table = useSelector(state => findTable(state, tableId));

   useEffect(() => { if (table === undefined) { navigate("/", { replace: true }) } }, [table]);

    const [currentTable, setCurrentTable] = useState(table);


    const handleSubmit = ({ editTable }) => {
        setCurrentTable(editTable)
        dispatch(fetchUpdateRequest({ editTable }))

        if (!{ currentTable }) return (
            <div className="d-flex justify-content-center">
                <Spinner variant="primary" animation="border" role="status" />
            </div>
        )
    }

    return (
        <TableForm action={handleSubmit} data={currentTable} id={tableId} />
    )
}
export default SingleTable;