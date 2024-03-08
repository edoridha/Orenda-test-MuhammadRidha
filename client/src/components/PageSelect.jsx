import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PageSelect(props) {
  const location = useLocation()
  const navigate = useNavigate()

  const queryParams = new URLSearchParams(location.search)
  const name = queryParams.get("name") || ""
  const phone = queryParams.get("phone") || ""
  const limit = queryParams.get("limit") || "10"

    const {totalItem, currentPage, startItem, endItem} = props
    const [page, setPage] = React.useState(Number(currentPage) );
  const [rowsPerPage, setRowsPerPage] = React.useState(Number(limit));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    navigate(`/?page=${newPage}&limit=${rowsPerPage}&name=${name}&phone=${phone}`)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    navigate(`/?page=${page}&limit=${event.target.value}&name=${name}&phone=${phone}`)
  };

  return (
    <TablePagination
      component="div"
      count={totalItem}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}
