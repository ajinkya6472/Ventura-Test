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
    )
}

export default ListIPO
