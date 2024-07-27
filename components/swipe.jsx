import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import SwipeButton from 'rn-swipe-button';

const App = ({yes}) => {
  return (
    <SafeAreaView className="bg-white mx-auto mt-6">
      <View className="text-[28px] font-bold text-center">

        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={100}
          height={55}
          width={350}
          title={`${yes ? "Swipe to Yes" : "Swipe to No"}`}
          titleColor='white'
          // thumbIconImageSource={thumbIcon}
          onSwipeSuccess={() => {
            alert('Submitted Successfully!');
          }}
          railFillBackgroundColor={`${yes ? "#3482F6" : "#FF6600"}`} 
          railFillBorderColor={`${yes ? "#3482F6" : "#FF6600"}`}
          thumbIconBackgroundColor="white"
          thumbIconBorderColor="white" 
          railBackgroundColor={`${yes ? "#3482F6" : "#FF6600"}`}
          railBorderColor={`${yes ? "#3482F6" : "#FF6600"}`}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;