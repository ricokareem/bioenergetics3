import React from "react";
import styled from "styled-components/native";

export const WhiteContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const OrangeContainer = styled.ScrollView`
  flex: 1;
  background-color: #fc9829;
`;

export const ListButton = styled.TouchableOpacity`
  background-color: #fc9829;
  flex: 1;
  flex-direction: column;
  height: 120px;
  justify-content: center;
  margin: 1px;
  padding: 20px;
`;

export const ListText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
`;

export const ListSubheadingText = styled.Text`
  color: #fff;
  font-size: 10px;
  line-height: 12px;
  margin-top: 5px;
`;
