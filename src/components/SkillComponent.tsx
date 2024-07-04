import React from 'react';
import { View, Text } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';



export function SkillComponents({title, rating}: any) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 30}}>{title}</Text>
        <StarRatingDisplay 
            rating={rating}
        />
    </View>
  );
}