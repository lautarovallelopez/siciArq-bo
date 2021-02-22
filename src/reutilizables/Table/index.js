import React, {Fragment} from 'react';
import {map, pick, forEach} from 'lodash'
import { Button, Table, ButtonGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import {faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import queryString from 'query-string';
const toQuery = attributes=>queryString.stringify(attributes);
const toParams = (attribute, obj)=>{
  let params='';
  forEach(attribute, function(value) {
    params += `/${encodeURIComponent(obj[value])}`
  });
  return params;
}
let counter = 0;
const getCounter = ()=>{
  counter++;
  return counter;
}
const Index = ({headers, rows, information, links, acciones, index}) => (
    <div className='table-responsive'>
    <Table className='table-responsive' size="lg">
      <thead>
        <tr key='headers'>
          {headers && map(headers, header => (
            <th key={header}>{header}</th>
          ))}
          {information && <th key='Informacion'>Información</th>}
          {links && <th key='Links'>Links</th>}
          {acciones && <th key='Acciones'>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        
        {rows && map(rows, row => (
          <tr key={`${getCounter()}-${row[index]}`}>
            {headers && map(headers, header => 
              <td key={`${header}-${row[index]}`}>{row[header]}</td>
            )}
            {information && (
              <td key={`${getCounter()}-Informacion-${row[index]}`}>
                <Modal
                  information = {information}
                  row = {row}
                  buttonLabel = "Ver"
                  index={getCounter()}
                />
              </td>
            )}
            {links &&
              <td key={`${getCounter()}-Links-${row[index]}`}>
                <ButtonGroup>
                  {map(links, link=>(
                      <Button tag={Link} to={`${link.url}/${row[link.id]}`} >
                        <FontAwesomeIcon icon={faPen}/>
                      </Button>
                  ))}
                </ButtonGroup>
              </td>
            }
            {acciones &&
              <td key={`${getCounter()}-Acciones-${row[index]}`}>
                <ButtonGroup>
                    <Button
                      tag={Link}
                      color="info"
                      to = {`${acciones.editar.to}${toParams(acciones.editar.attributes, row)}`}
                      title="editar"
                    >
                      <FontAwesomeIcon icon={faPen}/>
                    </Button>
                    <Button
                      color="danger" 
                      title="eliminar" 
                      onClick={() =>acciones.eliminar.onClick(pick(row, acciones.eliminar.attributes))}
                    >
                      <FontAwesomeIcon icon={faTrashAlt}/>
                    </Button>
                </ButtonGroup>
              </td>
            }
          </tr>
        ))}
        
      </tbody>
    </Table>

    </div>
    
);

export default Index;
