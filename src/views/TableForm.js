import React from 'react';
import { Row, Col, Form, Button, FormGroup, Alert} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { getAllOptions } from '../redux/statusRedux';
import { useForm } from 'react-hook-form';
import DeleteModal from './DeleteModal';
import { fetchDeleteRequest } from '../redux/tablesRedux';


const TableForm = ({ action, ...props }) => {
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [displayDeleteAlert, setDisplayDeleteAlert] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [editTable, setEditTable] = useState(props.data || {});
    const allOptions = useSelector(getAllOptions);
    useEffect(() => setEditTable({ ...editTable, id: props.id }), [editTable.status])

    const handleSubmit = (e) => {
        action({ editTable });
        navigate("/", { replace: true })
    }
    const handleClick = e => {
        e.preventDefault();
        setDisplayDeleteAlert(true);
    }

    const handleClose = (e) => {
        e.preventDefault();
        setDisplayDeleteAlert(false);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(fetchDeleteRequest(editTable.id))
        setDisplayDeleteAlert(false);
        navigate("/", { replace: true })
    }

    if(displayDeleteAlert) {
        return (
            <DeleteModal handleClose={handleClose} id={editTable.id} handleRemove={handleDelete} />
        )
    } else

    return (
        <Row>
            <Col>
                <h1>Table {props.id}</h1>
                <Form onSubmit={validate(handleSubmit)} >
                    <FormGroup as={Row}>
                        <Form.Label column md={3} className='m-3 text-center'>Status</Form.Label>
                        <Col md={7}>
                            <Form.Select className="mt-3" onChange={e => setEditTable({ ...editTable, status: (e.target.value) })}>
                                <option>{editTable.status}</option>
                                {allOptions.map(option => { return <option value={option} key={option}>{option}</option> })}
                            </Form.Select>
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} >
                        <Form.Label column md={3} className='m-3 text-center'>People</Form.Label>
                        <Col md={3}>
                            <Form.Control {...register('value',{ required: true, min: 0, max: `${editTable.maxPeople}` })}
                                type="number" className='mt-3' value={editTable.peopleAmount || ""} onChange={e => setEditTable({ ...editTable, peopleAmount: (e.target.value) })} />
                        </Col>
                        <Col md={1}>
                            <p className='mt-4 text-center'>/</p>
                        </Col>
                        <Col md={3}>
                            <Form.Control type="text" className='mt-3'
                                defaultValue={!editTable.maxPeople ? setEditTable({ ...editTable, maxPeople: '9' }) : editTable.maxPeople} />
                        </Col>
                    </FormGroup>
                    <div md={12}>
                        {errors.value && <span md={12} className="d-block form-text text-danger mt-2 text-center">The value have to be between 0 and {editTable.maxPeople}</span>}
                    </div>
                    <FormGroup as={Row} >
                        <Form.Label column md={3} className='m-3 text-center'>Bill $</Form.Label>
                        <Col md={7}>
                            <Form.Control className='mt-3 justify-content-left' {...register('bill',{ required: true, min: 0 })} type="number" value={!editTable.bill ? setEditTable({ ...editTable, bill: '0' }) : editTable.bill}
                                onChange={e => setEditTable({ ...editTable, bill: (e.target.value) })} />
                        </Col>
                    </FormGroup>
                    <Row>
                        <Col md={12} className='mt-3'>
                            {errors.bill && <span md={12} className="d-block form-text text-danger mt-2 text-center">The value have to be greater than 0 </span>}
                        </Col>
                        <Col md={12} className='m-3 text-center'>
                            <Button variant="primary" type="submit">Update</Button>
                            <Button className='mx-3' variant="danger" type="onClick" onClick={handleClick}>Delete</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default TableForm;