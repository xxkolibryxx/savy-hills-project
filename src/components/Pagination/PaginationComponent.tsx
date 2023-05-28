import ReviewBlock from 'components/ReviewBlock/ReviewBlock';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface IData {
  name: string;
  review: string;
  date: string;
}

interface PaginationComponentProps {
  items: IData[];
  itemsPerPage: number;
  onPageChange: (selectedPage: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  items,
  itemsPerPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [activePage, setActivePage] = useState(0);

  const handlePageChange = (selectedItem: { selected: number }): void => {
    setActivePage(selectedItem.selected);
    onPageChange(selectedItem.selected + 1);
  };

  const renderItems = (): JSX.Element[] => {
    const startIndex = activePage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = items.slice(startIndex, endIndex);

    return pageItems.map(({ name, review, date }, index) => (
      <ReviewBlock key={index} name={name} review={review} date={date} />
    ));
  };

  return (
    <>
      <div>{renderItems()}</div>
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
      />
    </>
  );
};

export default PaginationComponent;
