import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';

const TodosFilter = ({ filter, setFilter }) => {
  const {navigate} =useNavigation()
  const filters = ['All', 'Active', 'Done'];

  return (
    <View style={styles.filterContainer}>
      {filters.map((f) => (
        <TouchableOpacity
          key={f}
          style={[
            styles.filterBtn,
            filter === f && styles.activeFilterBtn,
          ]}
          onPress={() =>{
             setFilter(f)
           
            }}
        >
          <Text
            style={[
              styles.filterText,
              filter === f && styles.activeFilterText,
            ]}
          >
            {f}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TodosFilter;
