import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import "./IpoList.css"
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ListIPO = ({ data }) => {

    const navigate = useNavigate()

    const createDate = (fromDate, toDate) => {
        let start = moment(fromDate, 'D/M/YY');
        let end = moment(toDate, 'D/M/YY');
        let startDateFormatted = start.format('Do');
        let endDateFormatted = end.format('Do');
        let monthYearFormatted = end.format('MMM YYYY');
        let formattedDateRange = `${startDateFormatted} - ${endDateFormatted} ${monthYearFormatted}`;
        return formattedDateRange
    }

    const onRowClick = (id) => {
        navigate("/details", { state: { id: id } })
    }
    return (
        <>
            <div className='cardHeader'>
                <div>Company/Issue date</div>
                <div>Issue Size</div>
                <div>Price range</div>
                <div>Min invest/qty</div>
            </div>
            {data?.map((item) => {
                return <>
                    <div className='cards' onClick={() => onRowClick(item.id)}>
                        <div style={{ display: "flex" }}>
                            <div>
                                <img className='circular-image' src={item?.photo} />
                            </div>
                            <div>
                                <div className='font'>{item?.headingName}</div>
                                <div className='fontBelow'>{createDate(item.issueDateFrom, item.issueDateTo)}</div>
                            </div>
                        </div>
                        <div className='font'>&#8377;{item.issueSizeFrom}</div>
                        <div className='font'>&#8377;{item.priceRangeFrom}-{item.priceRangeTo}</div>
                        <div>
                            <div className='font'>&#8377;{item.minAmount}</div>
                            <div className='fontBelow'>100 Shares/5 Lot</div>
                        </div>
                    </div>
                </>
            })}
        </>
        // <div>
        //  <TableContainer component={Paper}>
        //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //     <TableHead>
        //       <TableRow>
        //         <TableCell>Company ? Issue Name</TableCell>
        //         <TableCell align="right">Issue Size</TableCell>
        //         <TableCell align="right">Price Range</TableCell>
        //         <TableCell align="right">Min Invesement</TableCell>
        //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {rows.map((row) => (
        //         <TableRow
        //           key={row.name}
        //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //         >
        //           <TableCell component="th" scope="row">
        //             {row.name}
        //           </TableCell>
        //           <TableCell align="right">{row.calories}</TableCell>
        //           <TableCell align="right">{row.fat}</TableCell>
        //           <TableCell align="right">{row.carbs}</TableCell>
        //           <TableCell align="right">{row.protein}</TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        // </TableContainer>
        // </div>
    )
}

export default ListIPO
