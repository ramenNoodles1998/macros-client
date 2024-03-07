import {Modal, View, Text, Pressable} from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import { incrementProteinByAmount, selectProtein } from '../../feature/macro-slice';

const MacroModal = (props) => {
  const protein = useSelector(selectProtein);
  const dispatch = useDispatch();
    return (
      <Modal
        animationType="slide"
        visible={props.modalVisible}
        onRequestClose={() => setModalVisible(!props.modalVisible)}>
        <View>
          <View>
            <Pressable onPress={() => dispatch(incrementProteinByAmount(10))}>
                <Text>add protein</Text>
            </Pressable>
            <Text>{protein}</Text>
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