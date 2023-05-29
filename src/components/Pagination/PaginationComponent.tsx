import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import ReviewBlock from 'components/ReviewBlock/ReviewBlock';
import { type IData } from 'interfaces/common';

interface PaginationComponentProps {
  items: IData[];
  itemsPerPage: number;
  onPageChange: (selectedPage: number) => void;
}

interface PaginationComponentState {
  activePage: number;
}

class PaginationComponent extends Component<PaginationComponentProps, PaginationComponentState> {
  state: PaginationComponentState = {
    activePage: 0
  };

  handlePageChange = (selectedItem: { selected: number }): void => {
    const { onPageChange } = this.props;
    const { selected } = selectedItem;
    const activePage = selected;

    this.setState({ activePage });
    onPageChange(activePage + 1);
  };

  renderItems = (): JSX.Element[] => {
    const { items, itemsPerPage } = this.props;
    const { activePage } = this.state;
    const startIndex = activePage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = items.slice(startIndex, endIndex);

    return pageItems.map(({ name, review, date }, index) => (
      <ReviewBlock key={index} name={name} review={review} date={date} />
    ));
  };

  render(): JSX.Element {
    const { items, itemsPerPage } = this.props;
    const { activePage } = this.state;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    return (
      <>
        <div>{this.renderItems()}</div>
        <ReactPaginate
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageChange}
          forcePage={activePage}
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
  }
}

export default PaginationComponent;
