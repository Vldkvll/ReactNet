import React, {useState} from "react";
import cs from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange, portionSize = 15}) => {

    let pageCount = Math.ceil(+totalUsersCount / +pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    };

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let buttonCountNext =  totalUsersCount-currentPage;
     let buttonCountPrev =  (totalUsersCount- (totalUsersCount-portionNumber))*15;

    return (
        <div className={cs.paginatorBlock}>
            { portionNumber > 1 &&
            <button className="btn btn-info"
                onClick={() => { setPortionNumber(portionNumber - 1) }}>
                {`<${buttonCountPrev}<`}
            </button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                    return <span className={ cn({
                        [cs.selectedPage]: currentPage === p
                    }, cs.pageNumber) }
                                 key={p}
                                 onClick={(e) => {
                                     onPageChange(p);
                                 }}>{p}</span>
                })}
            { portionCount > portionNumber &&
            <button className="btn btn-info"
                onClick={() => { setPortionNumber(portionNumber + 1) }}>
                {`> ${buttonCountNext} >`}
            </button> }
        </div>
    );
};

export default Paginator;