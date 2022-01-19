import {Alert} from 'react-native';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {job} = action.payload;

      const filtered = state.favList.find(item => item.id === job.id);
      let newList = [];

      if (filtered) {
        Alert.alert('Warning', 'The job already in list.');
        return state;
      } else {
        newList = [...state.favList, job];
        return {...state, favList: newList};
      }
    case 'REMOVE_FAVORITE':
      const {id} = action.payload;
      const list = state.favList.filter(item => item.id !== id);

      return {...state, favList: list};

    default:
      return state;
  }
};
