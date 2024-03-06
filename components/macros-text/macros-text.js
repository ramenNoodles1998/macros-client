import { Text } from 'react-native';
import { output } from '../../src/output';

const MacrosText = (props) => {
  return (
    <Text className="text-white font-sans font-extralight" style={props.style}>{props.children}</Text>
  );
};

export default MacrosText;
