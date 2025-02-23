import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestions} from '../../store/reducer/questionsSlice';
import {RootState, AppDispatch} from '../../store/store';

const QuestionsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {questions, loading, error} = useSelector(
    (state: RootState) => state.questions,
  );

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="blue" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      <Text>1</Text>
      <FlatList
        data={questions}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.subtitle}</Text>
        )}
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

export default QuestionsScreen;
