import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { tilesReducer } from '../store/reducers/tilesReducer';
import thunk from 'redux-thunk';

const Main = () => {
  const rootReducer = combineReducers({
    tiles: tilesReducer,
    //we can implement more reducers here
  });

  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <NavigationBar />
    </Provider>
  );
};

export default Main;
