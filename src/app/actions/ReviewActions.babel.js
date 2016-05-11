import AppStore from 'babel/store/AppStore';
import {
  REVIEW_APPROVE_FEATURES,
  REVIEW_REJECT_FEATURES
} from 'babel/constants/actionsTypes/Review';

const dispatch = AppStore.dispatch;

export const approveFeatures = function (parameters) {
  return {
    type: REVIEW_APPROVE_FEATURES,
    parameters
  };
};

export const rejectFeatures = function (parameters) {
  return {
    type: REVIEW_REJECT_FEATURES,
    parameters
  };
};

export const boundActions = {
  approveFeatures: (parameters) => dispatch(approveFeatures(parameters)),
  rejectFeatures: (parameters) => dispatch(rejectFeatures(parameters))
};

export default boundActions;
