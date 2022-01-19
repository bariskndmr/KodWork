import PageButton from 'components/PageButton';
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';

import Styles from './JobCard.style';

const JobCard = ({job, onSelect, isButton}) => {
  const dispatch = useDispatch();

  const removeFav = id => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {id}});
  };

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={Styles.container}>
        <Text style={Styles.title}>{job.name}</Text>
        <Text style={Styles.sprinklr}>Sprinklr</Text>
        <View style={Styles.locationContainer}>
          <Text style={Styles.location}>
            {job.locations && job.locations.length > 0
              ? job.locations[0].name
              : 'No information'}
          </Text>
        </View>
        <Text style={Styles.level}>
          {job.levels && job.levels.length > 0
            ? job.levels[0].name
            : 'No information'}
        </Text>
        {isButton && (
          <PageButton onPress={() => removeFav(job.id)} text="Remove" />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
