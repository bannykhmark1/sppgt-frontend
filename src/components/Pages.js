import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Pages = observer(() => {
    const { product } = useContext(Context);
    const pageCount = Math.ceil(product.totalCount / product.limit);
    const pages = [];
    const pageLimit = 5;
    let current = product.page;
    let startPage = Math.max(1, current - Math.floor(pageLimit / 2));
    let endPage = Math.min(pageCount, startPage + pageLimit - 1);

    if (endPage - startPage + 1 < pageLimit && startPage > 1) {
        startPage = Math.max(1, endPage - pageLimit + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="flex mt-3 justify-center">

            <button
                className="px-4 py-2 border-orange-300 0 hover:bg-orange-200"
                onClick={() => product.setPage(current - 1)}
                disabled={current === 1}
            >
                ←
            </button>
            {pages.map(page => (
                <button
                    key={page}
                 className={`px-4 py-2 border-orange-300 ${current === page ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'}`} 
    onClick={() => product.setPage(page)}
>
                
                    {page}
                </button>
            ))}
            <button
                className="px-4 py-2 border-orange-300 hover:bg-orange-200"
                onClick={() => product.setPage(current + 1)}
                disabled={current === pageCount}
            >
                →
            </button>

        </div>
    );
});

export default Pages;