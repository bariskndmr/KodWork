import JobCard from 'components/JobCard';
import React from 'react';
import {Alert, FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Styles from './FavJob.style';

const FavJob = ({navigation}) => {
  const favorites = useSelector(selector => selector.favList);

  const handleJob = (id, levels) => {
    navigation.navigate('JobDetailPage', {id, levels});
  };
  const renderFav = ({item}) => {
    return (
      <JobCard
        isButton
        job={item}
        onSelect={() => handleJob(item.id, item.levels)}
      />
    );
  };
  return (
    <SafeAreaView style={Styles.container}>
      {favorites.length > 0 ? (
        <FlatList data={favorites} renderItem={renderFav} />
      ) : (
        Alert.alert('Empty', 'The list is empty!')
      )}
    </SafeAreaView>
  );
};

export default FavJob;
