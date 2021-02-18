import React from 'react';
import PropTypes from 'prop-types';
import {
    Pagination as BasePagination, PaginationLink
} from 'reactstrap';
import ceil from 'lodash/ceil';
import min from 'lodash/min';
import range from 'lodash/range';
import StyledPaginationItem from './styled';

const getPages = (pageSize, resultsCount, maxPage) => range(min([ceil(resultsCount / pageSize), maxPage]));

const Pagination = ({
    pageSize, resultsCount, selectedPage, maxPage, onChange, paginationSize
}) => (
    <div className="d-flex justify-content-end align-items-center" data-testid="pagination">
        <BasePagination size={paginationSize}>
            <StyledPaginationItem disabled={selectedPage === 0} onClick={() => (selectedPage === 0 ? {} : onChange(0))} data-testid="first-page">
                <PaginationLink first/>
            </StyledPaginationItem>
            <StyledPaginationItem
                disabled={selectedPage === 0}
                onClick={() => (selectedPage === 0 ? {} : onChange(selectedPage - 1))}
                data-testid="previous-page"
            >
                <PaginationLink previous/>
            </StyledPaginationItem>
            {getPages(pageSize, resultsCount, maxPage).map((page, index) => (
                <StyledPaginationItem key={page} active={page === selectedPage} onClick={() => onChange(page)} data-testid={`page-${index}`}>
                    <PaginationLink data-testid={`page-number-${index}`}>{page + 1}</PaginationLink>
                </StyledPaginationItem>
            ))}
            <StyledPaginationItem
                data-testid="next-page"
                disabled={selectedPage === getPages(pageSize, resultsCount, maxPage).length - 1}
                onClick={() => (selectedPage === getPages(pageSize, resultsCount, maxPage).length - 1 ? {} : onChange(selectedPage + 1))}
            >
                <PaginationLink next/>
            </StyledPaginationItem>
            <StyledPaginationItem
                data-testid="last-page"
                disabled={selectedPage === getPages(pageSize, resultsCount, maxPage).length - 1}
                onClick={() => (
                    selectedPage === getPages(pageSize, resultsCount, maxPage).length - 1
                        ? {}
                        : onChange(getPages(pageSize, resultsCount, maxPage).length - 1)
                )}
            >
                <PaginationLink last/>
            </StyledPaginationItem>
        </BasePagination>
    </div>
);

Pagination.propTypes = {
    onChange: PropTypes.func.isRequired,
    resultsCount: PropTypes.number,
    pageSize: PropTypes.number,
    selectedPage: PropTypes.number.isRequired,
    maxPage: PropTypes.number,
    paginationSize: PropTypes.string
};

Pagination.defaultProps = {
    maxPage: 30,
    pageSize: 0,
    resultsCount: 0,
    paginationSize: 'md'
};

export default Pagination;
