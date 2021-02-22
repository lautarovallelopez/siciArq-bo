import React from 'react';
import { Pagination, PaginationItem, PaginationLink, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import ceil from 'lodash/ceil';
import toNumber from 'lodash/toNumber';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
const Paginator = ({total, limit, url, actualPage}) => {

    let history = useHistory();
    const changePage = (page)=>{
        history.push(`${url}/${page}`);
    }
    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <Button
                    first
                    tag={PaginationLink}
                    onClick={()=>changePage(1)}
                />
            </InputGroupAddon>
            <InputGroupAddon  addonType="prepend">
                <Button
                    disabled={actualPage==1}
                    previous
                    tag={PaginationLink}
                    onClick={()=>changePage(toNumber(actualPage)-1)}
                />
            </InputGroupAddon>
            <Input
                disabled
                value={`${actualPage}/${ceil(total/limit)}`}
                style={{background: 'white', color:'black', textAlign: 'center'}}
            />
            <InputGroupAddon addonType="append">
                <Button
                    next
                    disabled={actualPage==ceil(total/limit)}
                    tag={PaginationLink}
                    onClick={()=>changePage(toNumber(actualPage)+1)}
                />
            </InputGroupAddon>
            <InputGroupAddon addonType="append">
                <Button
                    last
                    tag={PaginationLink}
                    onClick={()=>changePage(ceil(total/limit))}
                />
            </InputGroupAddon>
        </InputGroup>
    )
}


export default Paginator;