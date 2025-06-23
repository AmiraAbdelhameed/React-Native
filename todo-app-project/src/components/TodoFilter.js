import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../styles';
import { FILTRATION_TYPES , updateFilter } from '../Redux/todosSlice';

const TodoFilter = () => {
    const { filter, todos } = useSelector((state) => state.todo);
    const dispatch = useDispatch()
    const handleFilterChange = (filter) => {
        dispatch(updateFilter(filter))
    }
    return (
        <>
        <View style={styles.dividerLine}/>
            <View style={styles.filterContainer}>

                <TouchableOpacity
                    style={{
                        ...styles.filterBtn,
                        ...(filter === FILTRATION_TYPES.ALL
                            ? styles.activeFilterBtn
                            : null),
                    }}
                    activeOpacity={0.7}
                    onPress={() => handleFilterChange(FILTRATION_TYPES.ALL)}
                >
                    <Text
                        style={{
                            ...styles.filterText,
                            ...(filter === FILTRATION_TYPES.ALL
                                ? styles.activeFilterText
                                : null),
                        }}
                    >
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.filterBtn,
                        ...(filter === FILTRATION_TYPES.IN_PROGRESS
                            ? styles.activeFilterBtn
                            : null),
                    }}
                    activeOpacity={0.7}
                    onPress={() => handleFilterChange(FILTRATION_TYPES.IN_PROGRESS)}
                >
                    <Text
                        style={{
                            ...styles.filterText,
                            ...(filter === FILTRATION_TYPES.IN_PROGRESS
                                ? styles.activeFilterText
                                : null),
                        }}
                    >
                        In Progress
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.filterBtn,
                        ...(filter === FILTRATION_TYPES.COMPLETED
                            ? styles.activeFilterBtn
                            : null),
                    }}
                    activeOpacity={0.7}
                    onPress={() => handleFilterChange(FILTRATION_TYPES.COMPLETED)}
                >
                    <Text
                        style={{
                            ...styles.filterText,
                            ...(filter === FILTRATION_TYPES.COMPLETED
                                ? styles.activeFilterText
                                : null),
                        }}
                    >
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default TodoFilter
