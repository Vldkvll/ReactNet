import React from "react";
import cs from "./Paginator.module.css";



let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {

    let pageCount = Math.ceil(+totalUsersCount / +pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={cs.paginatorBlock}>
            {pages.map((page) =>
                (<span key={page}
                    className={currentPage === page
                    ? cs.selectedPage
                    : cs.unselectedPage}
                       onClick={(event) => {
                           onPageChange(page)
                       }}>
                            {page}
                        </span>)
            )}
        </div>
    );
};

export default Paginator;