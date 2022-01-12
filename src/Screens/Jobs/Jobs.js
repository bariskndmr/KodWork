/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Config from 'react-native-config';

import Error from 'components/Error';
import JobCard from 'components/JobCard';
import Loading from 'components/Loading';
import PageButton from 'components/Buttons/PageButton';
import useFetch from 'hooks/useFetch';

import Styles from './Jobs.style';

const Jobs = () => {
  const [page, setPage] = useState(1);

  const {data, loading, error} = useFetch(
    `${Config.JOBS_API_URL}?page=${page}`,
  );

  useEffect(() => {
    page;
  }, []);

  if (loading) {
    return <Loading />;
  }

  const increasePage = () => {
    setPage(page + 1);
  };
  const decreasePage = () => {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  if (error) {
    return <Error />;
  }
  const renderJobs = ({item}) => {
    return <JobCard job={item} />;
  };

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderJobs}
        key={item => item.id}
        ListFooterComponent={
          <>
            <Text style={Styles.counter}>{page} / 50</Text>
            <View style={Styles.pageButtons}>
              <PageButton text="Previous Page" onPress={decreasePage} />
              <PageButton text="Next Page" onPress={increasePage} />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Jobs;
