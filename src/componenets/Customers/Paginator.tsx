import { CustomerDetailsType } from '@/globalTypes';
import Image from 'next/image';

const CustomPagination = ({ currentPage, customers, customersPerPage, handlePageChange }: { currentPage: number, customers: CustomerDetailsType[], customersPerPage: number, handlePageChange: (currentPage: number) => void }) => {
    const isPreviousDisabled = currentPage === 1; // Disable Previous button on the first page
    const isNextDisabled = customers.length < customersPerPage; // Disable Next button if less than 10 customers

    // Handle the Next page change
    const handleNextPage = () => {
        if (!isNextDisabled) {
            handlePageChange(currentPage + 1);
        }
    };

    // Handle the Previous page change
    const handlePreviousPage = () => {
        if (!isPreviousDisabled) {
            handlePageChange(currentPage - 1);
        }
    };

    return (
        <div className='flex items-center gap-[2rem]'>
            {/* Previous Button */}
            <button
                className={`flex items-center gap-[1rem] ${isPreviousDisabled ? 'opacity-[50%]' : ''}`}
                onClick={handlePreviousPage}
                disabled={isPreviousDisabled}
            >
                <Image
                    src={'/paginantion-arrow.svg'}
                    width={16}
                    height={16}
                    alt="pagination-previous-arrow"
                />
                <span>Previous</span>
            </button>

            {/* Current Page Number Button */}
            <button
                className='bg-white border-[0.8px] border-[#171717] rounded-[0.25rem] px-4 py-2'
                disabled={true} // Disable as it is just for display
            >
                {currentPage}
            </button>

            {/* Next Button */}
            <button
                className={`flex items-center gap-[1rem] cursor-pointer ${isNextDisabled ? 'opacity-[50%]' : ''}`}
                onClick={handleNextPage}
                disabled={isNextDisabled}
            >
                <span>Next</span>
                <Image
                    src={'/paginantion-arrow.svg'}
                    width={16}
                    height={16}
                    alt="pagination-next-arrow"
                    className='rotate-180'
                />
            </button>
        </div>
    );
};

export default CustomPagination;
