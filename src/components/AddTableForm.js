import React from "react";
import TableForm from "../views/TableForm";
import { useDispatch, useSelector } from "react-redux";
import { getTablesId } from "../redux/statusRedux";
import { fetchAddRequest } from "../redux/tablesRedux";
import Spinner from 'react-bootstrap/Spinner';

const AddTableForm = () => {
    const dispatch = useDispatch();
    const tablesId = useSelector(state => getTablesId(state));
    const tableId = Math.max(...tablesId) + 1;

    const handleSubmit = ({ editTable }) => {
        dispatch(fetchAddRequest({ editTable }))

        if (!{ editTable }) return (
            <div className="d-flex justify-content-center">
                <Spinner variant="primary" animation="border" role="status" />
            </div>
        )
    }

    return (
        <div>
            <h1>Add Table</h1>
            <TableForm action={handleSubmit} id={`${tableId}`} />
        </div>
    );
}
export default AddTableForm