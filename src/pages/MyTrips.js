import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { FlatList } from 'react-native-gesture-handler';
import TileItem from '../components/TileItem';
import { deleteTile } from '../store/actions/tilesActions';

const MyTrips = () => {
  const times = useSelector((state) => state.tiles);
  const dispatch = useDispatch();

  const deleteItemHandler = (itemId) => {
    dispatch(deleteTile(itemId));
  };

  return (
    <FlatList
      keyExtractor={(item) => item.start.toString()}
      data={times}
      numColumns={2}
      renderItem={({ item }) => {
        return (
          <TileItem
            start={item.start}
            end={item.end}
            type={item.type}
            id={item.id}
            deleteItem={deleteItemHandler}
          />
        );
      }}
    />
  );
};

export default MyTrips;

const styles = StyleSheet.create({});
