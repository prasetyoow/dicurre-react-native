import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR} from '../../assets/styles/coloring';

const CustomInput = ({
  placeholder,
  icon,
  type,
  secure,
  onChange,
  value,
  defaultValue,
  name,
}) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.iconInput}>
        <Icon name={icon} size={24} color={PRIMARY_COLOR} />
      </View>
      <View style={styles.textInput}>
        <TextInput
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={!showText}
          onChangeText={onChange(name)}
          value={value}
          defaultValue={defaultValue}
        />
      </View>
      {secure && (
        <TouchableOpacity onPress={() => setShow(!showText)}>
          <View style={styles.iconInput}>
            <Icon
              name={showText ? 'eye-slash' : 'eye'}
              size={24}
              color="#2F3163"
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 3,
    width: '100%',
    borderRadius: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 25,
    flexDirection: 'row',
  },
  containerIcon: {
    flexDirection: 'row',
  },
  iconInput: {
    margin: 10,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
  },
});

export default CustomInput;
