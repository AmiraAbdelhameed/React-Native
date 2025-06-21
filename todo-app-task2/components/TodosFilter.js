import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../styles'
const TodosFilter =()=>
    {
    return (
    
        <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.activeFilterBtn}>
                  <Text style={styles.activeFilterText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                  <Text style={styles.filterText}>Active</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                  <Text style={styles.filterText}>Done</Text>
                </TouchableOpacity>
              </View>

    )

}
export default TodosFilter