import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import {
    Col, Container, Row
} from 'reactstrap';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

import {
    HR, Input, SaveButton, StateDropdown, RoleDropdown, BackButton
} from '@components/common';
import {handleFormSubmit} from '@util/ui';
import routes from '@constants/routes';
import Spinner from '@components/common/Spinner';

const ValidationSchema = Yup.object().shape({
    name: Yup.string().matches('^[a-z]+$', 'Debe ingresar solo letras y minusculas.').nullable().required('Nombre requerido'),
    surname: Yup.string().matches('^[a-z]+$', 'Debe ingresar solo letras y minusculas.').nullable().required('Apellido requerido.'),
    email: Yup.string().email('Debe ingresar un email válido').nullable().required('Email requerido.'),
    documentId: Yup.number()
        .min(10000, 'Debe tener al menos 5 números')
        .max(99999999, 'No debe tener más de 8 números')
        .nullable()
        .required('Documento requerido.'),
    attributes: Yup.object().shape({
        phone: Yup.string().min(8, 'Debe tener minimo 8 caracteres').max(17, 'Debe tener maximo 17 caracteres').nullable()
            .required('Teléfono requerido.'),
        stateId: Yup.number().nullable().required('Provincia requerida.')
    }),
    roles: Yup.array().of(Yup.string()).required('Rol requerido.')
});

const Editor = ({
    submit, findUser, user, resetUser, loading
}) => {
    const {id} = useParams();
    const history = useHistory();

    const initialValues = {
        id,
        name: user?.name,
        surname: user?.surname,
        email: user?.email,
        documentId: user?.documentId,
        attributes: {
            phone: user?.attributes?.phone,
            stateId: user?.attributes?.stateId
        },
        roles: user?.roles
    };

    useEffect(() => {
        if (id) {
            findUser(id);
        }
        return () => resetUser();
    }, []);

    return (
        <Spinner loading={loading}>
            <Formik
                enableReinitialize
                onSubmit={(values, {setSubmitting}) => handleFormSubmit({
                    values,
                    submit,
                    resolve: () => history.push('/users'),
                    reject: () => {
                        setSubmitting(false);
                    }
                })}
                validationSchema={ValidationSchema}
                initialValues={initialValues}
                isInitialValid={ValidationSchema.isValidSync(initialValues)}
            >
                {({
                    errors, isSubmitting, isValid, values, setFieldValue
                }) => (
                    <Form>
                        <Container fluid>
                            <Row>
                                <Col sm={8}>
                                    {id
                                        ? <BackButton title="Edición de usuario" to={routes.USERS}/>
                                        : <BackButton title="Alta de usuario" to={routes.USERS}/>}
                                </Col>
                            </Row>
                            <HR/>
                            <Row>
                                <Col sm={3}>
                                    <Field as={Input} type="text" id="name" name="name" label="Nombre" error={errors.name}/>
                                </Col>
                                <Col sm={3}>
                                    <Field as={Input} type="text" id="surname" name="surname" label="Apellido" error={errors.surname}/>
                                </Col>
                                <Col sm={3}>
                                    <Field as={Input} type="email" id="email" name="email" label="Email" error={errors.email}/>
                                </Col>
                                <Col sm={3}>
                                    <Field
                                        as={StateDropdown}
                                        id="attributes.stateId"
                                        name="attributes.stateId"
                                        label="Provincia"
                                        control="attributes.stateId"
                                        error={errors?.attributes?.stateId}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <Field
                                        as={Input}
                                        type="number"
                                        id="documentId"
                                        name="documentId"
                                        label="Documento"
                                        error={errors.documentId}
                                    />
                                </Col>
                                <Col sm={3}>
                                    <Field
                                        as={Input}
                                        type="text"
                                        id="attributes.phone"
                                        name="attributes.phone"
                                        label="Teléfono (con código de area)"
                                        error={errors?.attributes?.phone}
                                    />
                                </Col>
                                <Col sm={3}>
                                    <Field
                                        as={RoleDropdown}
                                        id="roles"
                                        name="roles"
                                        label="Rol"
                                        control="roles"
                                        error={errors.roles}
                                        value={values?.roles?.[0]}
                                        onChange={({target: {id: name, value}}) => setFieldValue(name, [value])}
                                    />
                                </Col>
                                <Col sm={3} className="d-flex align-items-center">
                                    <SaveButton type="submit" size="lg" loading={isSubmitting} disabled={isSubmitting || !isValid}/>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                )}
            </Formik>
        </Spinner>
    );
};

Editor.propTypes = {
    submit: PropTypes.func.isRequired,
    findUser: PropTypes.func.isRequired,
    resetUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        documentId: PropTypes.number.isRequired,
        attributes: PropTypes.shape({
            phone: PropTypes.string.isRequired,
            stateId: PropTypes.string.isRequired
        }).isRequired,
        roles: PropTypes.arrayOf(PropTypes.string)
    }),
    loading: PropTypes.bool.isRequired
};

Editor.defaultProps = {
    user: undefined
};

export default Editor;
