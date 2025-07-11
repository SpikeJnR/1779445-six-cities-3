import { NameSpace } from '../../../const.ts';
import { State } from '../../../types/state.ts';

export const getOffer = (state: State) => state[NameSpace.Data].offer;
export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getComments = (state: State) => state[NameSpace.Data].comments;
export const getNearby = (state: State) => state[NameSpace.Data].nearby;
export const getFavoriteOffers = (state: State) => state[NameSpace.Data].favoriteOffers;
export const getLoadingStatus = (state: State) => state[NameSpace.Data].isOffersDataLoading;
export const getOffersError = (state: State) => state[NameSpace.Data].fetchOffersError;
export const getOfferLoading = (state: State) => state[NameSpace.Data].isOfferLoading;
export const getFavoriteLoading = (state: State) => state[NameSpace.Data].isFavoriteLoading;
