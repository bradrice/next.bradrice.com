import { combineReducers } from 'redux';
import artwork from './artwork-reducer';
import carousel from './carousel-reducer';
import saleitem from './saleitem.reducer';
import artworkdetail from './artworkdetail.reducer';

export default combineReducers({
  artwork,
  carousel,
  saleitem,
  artworkdetail
})