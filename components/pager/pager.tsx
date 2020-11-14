import React from 'react';
import './pager.scss';
import { connect } from 'react-redux';
import { ConnectedArtPage } from '../art/ArtPage'
import { requestArtworkApiData, setSaleItem, requestArtworkPagedApiData } from '../../state/actions/artworkActions';

interface IPagerProps {
  requestArtworkApiData: any,
  requestArtworkPagedData: any
}

class Pager extends React.Component <IPagerProps> {

  goNext = (e) => {
    console.log("fetch url:", this.props.next);
    if(this.props.next != null){
      this.props.requestArtworkPagedData(this.props.next);
    }
  }

  goPrevious = (e) => {
    console.log("fetch url:", this.props.previous);
    if(this.props.previous != null){
      this.props.requestArtworkPagedData(this.props.previous);
    }
  }

  goToPage = (item) => {
    console.log(item);
    let url;
    if(item === "1") {
      url = 'http://localhost:8000/api/artwork?format=json'
    } else {
      url = `http://localhost:8000/api/artwork?page=${item}&format=json`
    }
      this.props.requestArtworkPagedData(url);
  }

  render () {
    let pageCount = this.props.pages;
    let pageArray = []
    for(let i = 0; i<pageCount; i++) {
      pageArray[i] = i+1;
    }
    const pagelist = pageArray.map((item, i) => (
      <li className="page-item" key={i}>
        <a className="page-link" href="#" onClick={() => this.goToPage(item)} >{item}</a>
      </li>
    ))
    console.log(pagelist)
    return (
      <nav aria-label="Page navigation example">
      <ul className="pagination">
          <li className="page-item"><button className="page-link" onClick={this.goPrevious}>Previous</button></li>
          {pagelist}
          <li className="page-item"><button className="page-link" disabled={this.props.nextdisabled} onClick={this.goNext}>Next</button></li>
      </ul>
      </nav>
    )
  }
  };


  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      count: state.artwork.count,
      next: state.artwork.next,
      previous: state.artwork.previous,
      nextdisabled: state.artwork.next ? false : true,
      pages: state.artwork.pages

    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      requestArtworkPagedData: (url:string) => {
        console.log('getting ready to dispatch with this url', url);
        dispatch(requestArtworkPagedApiData(url));
      }
    }
  };
  
  
  export const ConnectedPager = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Pager)
