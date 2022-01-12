import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import Styles from './JobCard.style';

const JobCard = ({job}) => {
  return (
    <TouchableWithoutFeedback>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
