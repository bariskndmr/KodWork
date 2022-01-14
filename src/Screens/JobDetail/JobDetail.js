import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Config from 'react-native-config';
import HTMLView from 'react-native-htmlview';

import Error from 'components/Error';
import Loading from 'components/Loading';
import useFetch from 'hooks/useFetch';

import Styles from './JobDetail.style';
import PageButton from 'components/Buttons/PageButton';

const Header = ({data}) => {
  return (
    <View style={Styles.headerContainer}>
      <Text style={[Styles.name, Styles.titleText]}>{data.name}</Text>
      <View style={Styles.textContainer}>
        <Text style={Styles.text}>
          <TextColor text="Locations :" />
          {data.locations && data.locations.length > 0
            ? data.locations[0].name
            : 'No Information'}
        </Text>
        <Text style={Styles.text}>
          <TextColor text="Job Level :" /> {data.levels.name}
          {data.levels && data.levels.length > 0
            ? data.levels[0].name
            : 'No Information'}
        </Text>
      </View>
      <Text style={[Styles.title, Styles.titleText]}>Job Detail</Text>
    </View>
  );
};

const Button = () => {
  return (
    <View style={Styles.buttonContainer}>
      <PageButton icon="logout" text="Logout" />
      <PageButton icon="heart" text="Favorite Job" />
    </View>
  );
};

const TextColor = ({text}) => {
  return <Text style={Styles.textColor}>{text}</Text>;
};

const JobDetail = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.JOBS_API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Header data={data} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.innerContainer}>
          <HTMLView value={data.contents} stylesheet={Styles} />
        </View>
      </ScrollView>
      <Button />
    </SafeAreaView>
  );
};

export default JobDetail;
