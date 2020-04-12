import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomIcon(props) {
  const {name, ...rest} = props;

  useEffect(() => {
    try {
      Icon.loadFont();
    } catch (error) {
      console.log('Error in Loading Font Awesome');
    }
  });

  return <Icon name={name} {...rest} />;
}

export default CustomIcon;
