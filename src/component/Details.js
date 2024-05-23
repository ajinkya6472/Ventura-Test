import moment from 'moment';
import React from 'react'

const Details = ({ dataProps }) => {

    const createDate = (fromDate, toDate) => {
        let start = moment(fromDate, 'D/M/YY');
        let end = moment(toDate, 'D/M/YY');
        let startDateFormatted = start.format('Do MMM');
        let endDateFormatted = end.format('Do');
        let monthYearFormatted = end.format('MMM YYYY');
        let formattedDateRange = `${startDateFormatted} - ${endDateFormatted} ${monthYearFormatted}`;
        return formattedDateRange
    }

    return (
        <>
            <div className='ipoDetailsMain'>
                <h4 style={{ textAlign: "start", fontFamily: "Sora", fontSize: "22px" }}>IPO details</h4>
                <div className='ipoDetails'>
                    <div>
                        <div className='fontBelow'>Issue size</div>
                        <div className='font'><b>&#8377;{dataProps[0].issueSizeFrom} - {dataProps[0].issueSizeTo}Cr.</b></div>
                    </div>
                    <div>
                        <div className='fontBelow'>Price range</div>
                        <div className='font'><b>&#8377;{dataProps[0].priceRangeFrom} - {dataProps[0].priceRangeTo}</b></div>
                    </div>
                    <div>
                        <div className='fontBelow'>Minimum amount</div>
                        <div className='font'><b>&#8377;{dataProps[0].minAmount}</b></div>
                    </div>
                    <div>
                        <div className='fontBelow'>Lot size</div>
                        <div className='font'><b>{dataProps[0].lotSize} shares/lots</b></div>
                    </div>
                    <div >
                        <div className='fontBelow'>Issue dates</div>
                        <div className='font'><b>{createDate(dataProps[0].issueDateFrom, dataProps[0].issueDateTo)}</b></div>
                    </div>
                    <div>
                        <div className='fontBelow'>Listed on</div>
                        <div className='font'><b>{dataProps[0].listedOn}</b></div>
                    </div>
                    <div>
                        <div className='fontBelow'>Listed price</div>
                        <div className='font'><b>&#8377;{dataProps[0].listedPrice}</b></div>
                    </div>

                    <div>
                        <div className='fontBelow'>Listing gains</div>
                        <div className='font'><b>&#8377;{dataProps[0].listingGains}</b></div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Details
