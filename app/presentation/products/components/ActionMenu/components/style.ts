import styled from "styled-components/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {MaterialIcons} from "@expo/vector-icons";

export const MenuIcon = styled.TouchableOpacity`
  padding: 8px;
`;

export const ModalBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0,0,0,0.2);
  justify-content: flex-start;
  align-items: flex-end;
`;

export const MenuContainer = styled.View`
  background-color: white;
  margin-top: 50px;
  margin-right: 16px;
  border-radius: 8px;
  padding: 8px;
  elevation: 5;
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 12px 10px;
  flex-direction: row;
    align-content: center;
    align-items: center;
`;

export const SubitemMenuIcon = styled(FontAwesome)<{selected?: boolean}>`
  margin-right: 4px;
    width: 16px;
    height: 18px;
`

export const MenuText = styled.Text<{selected?: boolean}>`
  font-size: 14px;
  color: ${ props => props.selected ? '#1e40af' : '#111'};
    font-weight: bolder;
`;

export const ScrollView = styled.ScrollView`
`;