import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../../store/reducer/categoriesSlice';
import {RootState, AppDispatch} from '../../store/store';

const CategoriesScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {categories, loading, error} = useSelector(
    (state: RootState) => state.categories,
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderItem = data => {
    console.log('data', data);
    return (
      <View>
        <Text>{data.name}</Text>
      </View>
    );
  };
  if (loading) return <ActivityIndicator size="large" color="blue" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      <Text>2</Text>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#f5f5f5'},
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  error: {color: 'red', fontSize: 16, textAlign: 'center', marginTop: 20},
});

export default CategoriesScreen;
