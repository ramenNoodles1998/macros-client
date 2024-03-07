import {Modal, View, Text, Pressable} from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import { incrementProteinByAmount, incrementCarbsByAmount, incrementFatByAmount, selectProtein, selectCarbs, selectFat } from '../../feature/macro-slice';

const MacroModal = (props) => {
  let selector;
  let incrementFunction;
  const dispatch = useDispatch();

  if(props.modalType === 'protein') {
    selector = useSelector(selectProtein);
    incrementFunction = incrementProteinByAmount
  } else if (props.modalType === 'carbs') {
    selector = useSelector(selectCarbs);
    incrementFunction = incrementCarbsByAmount
  } else {
    selector = useSelector(selectFat);
    incrementFunction = incrementFatByAmount
  }

  console.log(props)
  return (
    <Modal
      animationType="slide"
      visible={props.modalVisible}
      onRequestClose={() => setModalVisible(!props.modalVisible)}>
      <View>
        <View>
          <Pressable onPress={() => dispatch(incrementFunction(10))}>
              <Text>add {props.modalType}</Text>
          </Pressable>
          <Text>{selector}</Text>
          <Pressable
            onPress={() => props.setModalVisible(!props.modalVisible)}>
            <Text>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default MacroModal;