import styled from '@emotion/styled';
import {Table} from 'reactstrap';

const StyledTable = styled(Table)(() => ({
    overflow: 'auto',
    display: 'block',
    tableLayout: 'auto'
}));

export default StyledTable;
