import React from 'react';
import {map} from 'lodash'
import { Button, Table, ButtonGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import {faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import transformRoute from '@util/transformRoute';
import routes from '@constants/routes';

const Index = ({headers, rows, information, route, deleteFunction}) => (
  <div className='table-responsive'>
    <Table className='table-responsive' size="lg">
      <thead>
        <tr key='headers'>
          {headers && map(headers, header => (
            <th key={header}>{header}</th>
          ))}
          {information &&
            <th key='Informacion'>Información</th>
          }
          <th key='Acciones'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {rows && map(rows, row => (
          <tr>
            {headers && map(headers, header => 
              <td >{row[header]}</td>
            )}
            {information && (
              <td>
                <Modal
                  information = {information}
                  row = {row}
                  buttonLabel = "Ver"
                />
              </td>
            )}
              <td>
                <ButtonGroup>
                    <Button
                      tag={Link}
                      color="info"
                      to = {transformRoute(routes[route].FETCH_ONE, row)}
                      title="editar"
                    >
                      <FontAwesomeIcon icon={faPen}/>
                    </Button>
                    <Button
                      color="danger" 
                      title="eliminar" 
                      onClick={() => deleteFunction(row)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt}/>
                    </Button>
                </ButtonGroup>
              </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>    
);

export default Index;
