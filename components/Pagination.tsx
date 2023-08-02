
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Pagination = ({ total, pageSize, onClick, ShowPageSize = false, activePage }: any) => {
    const totalPages = Math.ceil(total / pageSize);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const startItem = (activePage - 1) * pageSize + 1;
    const endItem = Math.min(startItem + pageSize - 1, total);

    return (
        <div className="flex items-center justify-between border-t px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{startItem}</span> to{' '}
                        <span className="font-medium">{endItem}</span> of <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px" aria-label="Pagination">
                        {pageNumbers.map((number: any) => {
                            return (
                                <a
                                    key={number}
                                    onClick={() => onClick(number)}
                                    aria-current="page"
                                    className={`relative z-10 inline-flex items-center border-[.2px] px-4 py-2 text-sm font-semibold ${activePage === number ? 'bg-black text-white' : 'text-Charcoal'
                                        } cursor-pointer`}
                                >
                                    {number}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Pagination