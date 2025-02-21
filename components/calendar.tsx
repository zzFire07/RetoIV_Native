import { CalendarBody, CalendarContainer, CalendarHeader } from '@howljs/calendar-kit';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Calendar = () => {
  return (
    <View style={styles.calendario}>
      <CalendarContainer numberOfDays={3} scrollByDay={true}>
        <CalendarHeader/>
        <CalendarBody />
      </CalendarContainer>
    </View>
      
    );
};
const styles = StyleSheet.create({
  calendario:{
    flex: 1,
    maxHeight: 300,
    width: 300,
    marginTop: 40,
    alignSelf: "center"
  }
})
export default Calendar;
