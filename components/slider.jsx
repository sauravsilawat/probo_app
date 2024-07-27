import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

const CustomSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleMinus = () => {
    setSliderValue(Math.max(sliderValue - 10, 0));
  };

  const handlePlus = () => {
    setSliderValue(Math.min(sliderValue + 10, 100));
  };

  return (
    <View className="flex-row">
      <TouchableOpacity onPress={handleMinus} className="bg-gray-300 w-10 h-10 rounded-xl items-center justify-center">
        <Text className="text-lg">−</Text>
      </TouchableOpacity>

      <Slider
        style={{ width: '80%', alignSelf: 'center' }}
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        thumbTintColor='black'
        maximumTrackTintColor='black'
        minimumTrackTintColor='black'
        onValueChange={(value) => setSliderValue(value)}
      />

      <TouchableOpacity onPress={handlePlus} className="bg-gray-300 w-10 h-10 rounded-xl items-center justify-center">
        <Text className="text-lg">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSlider;
