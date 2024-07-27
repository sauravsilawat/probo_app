import { View, TouchableOpacity, Image, Modal, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../../constants/data'
import { trendingNow1 } from '../../constants/data'
import { trendingNow2 } from '../../constants/data'

import banner from "../../assets/images/swimmer.jpg"
import ipLogo from "../../assets/images/ipl.jpg"
import CustomSlider from '../../components/slider'
import SwipeButton from '../../components/swipe'

export default function index() {

  const number = [1, 2, 3, 4, 5, 6];
  const [showModal, setShowModal] = useState(false);
  const [yes, setYes] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ScrollView className="px-5">
      <Image source={banner} className="w-full h-40"></Image>

      {/* Category */}
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="flex-row gap-4 my-4">
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white h-24 w-24 gap-2 items-center justify-center rounded-xl"
            >
              <Image source={item.img} className="w-[30%] h-[30%]" />
              <Text className="text-xs font-medium">
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Trending */}
      <Text className="font-bold text-base mt-4">Trending Now</Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="flex-row gap-4 mt-1">
          {trendingNow1.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white flex-row p-2 gap-2 items-center justify-center rounded-xl"
            >
              <Image source={item.img} className="w-10 h-10" />
              <Text className="text-xs font-medium">
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="flex-row gap-4 mt-1 mb-4">
          {trendingNow2.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white flex-row p-2 gap-2 items-center justify-center rounded-xl"
            >
              <Image source={item.img} className="w-10 h-10" />
              <Text className="text-xs font-medium">
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="mt-4 mb-24">
        {number.map((item, index) => (
          <View key={index} className='bg-white my-2 p-4 rounded-lg'>
            <View className="flex-row justify-between items-center">
              <View className="gap-5">
                <Text className="font-bold text-gray-600 text-base">Kolkata to win the match vs Mumbai?</Text>
                <Text className="text-gray-500 text-xs font-medium">H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0</Text>
              </View>
              <Image source={ipLogo} className="w-10 h-10"></Image>
            </View>
            <View className="flex-row mt-4 justify-between">
              <TouchableOpacity 
              onPress={()=>(
                setShowModal(true),
                setYes(true)
                )} 
                className="bg-[#E0EAFF] w-[48%] items-center py-3 rounded-lg">
                <Text>Yes ₹ 5.3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>(
                setShowModal(true),
                setYes(false)
                )}  
                className="bg-[#FEE4E2] w-[48%] items-center py-3 rounded-lg">
                <Text>No ₹ 4.7</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <Modal
        visible={showModal}
        animationType="slide"
        transparent
        onRequestClose={closeModal}
      >
        <View className="bg-[#04040490] h-screen w-full justify-end">
          <TouchableOpacity onPress={closeModal} className="h-[40%] w-full"></TouchableOpacity>

          <View className="bg-white h-[60%] w-full rounded-t-3xl relative">
            <View className="absolte w-12 h-4 bg-white top-[-30px] rounded-full mx-auto"></View>

            <View className="flex-row mx-6 mt-8 mb-4 justify-between">
              <Text className="font-bold text-gray-600 text-base">Kolkata to win the match vs Mumbai?</Text>
              <Image source={ipLogo} className="w-10 h-10"></Image>
            </View>

            <View className="flex-row mt-2 mx-6 justify-between bg-white rounded-full" style={{
              shadowColor: '#6c6c6c',
              shadowOpacity: 0.1,
              elevation: 4,
            }}>
              <TouchableOpacity onPress={()=>(setYes(true))} className={`${yes ? 'bg-blue-500' : ''} w-[48%] items-center py-4 rounded-full`}>
                <Text className={`${yes ? "text-white" : ""} font-medium`}>Yes ₹ 5.3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>(setYes(false))} className={`${!yes ? 'bg-orange-600' : ''} w-[48%] items-center py-4 rounded-full`}>
                <Text className={`${!yes ? "text-white" : ""} font-medium`}>No ₹ 4.7</Text>
              </TouchableOpacity>
            </View>

            <View className="mx-6 border border-gray-300 rounded-2xl p-4 mt-8">
              <View className="flex-row justify-between">
                <Text className="font-medium">Price</Text>
                <Text className="font-medium">{yes ? "₹ 5.3": "₹ 4.7"}</Text>
              </View>
              <Text className="text-xs ml-auto text-gray-500">132045 qty available</Text>

              <View className="mt-8">
                <CustomSlider />
              </View>

              <View className="w-full h-[1px] my-4 bg-gray-300"></View>

              <View className="justify-between items-center flex-row">
                <View className="items-center gap-2">
                  <Text className="font-medium">{yes ? "₹ 5.3": "₹ 4.7"}</Text>
                  <Text className="text-gray-500">You put</Text>
                </View>
                <View className="items-center gap-2">
                  <Text className="font-medium text-green-500">₹ 10</Text>
                  <Text>You get</Text>
                </View>
              </View>
            </View>

            <SwipeButton yes={yes} />

            <Text className="text-gray-500 text-xs mx-auto my-4">Available Balance: 400.00</Text>

          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}