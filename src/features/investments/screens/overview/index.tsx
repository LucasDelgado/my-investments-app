import {
  View,
  Text,
  StyleSheet,
  Modal,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Button } from '@rneui/themed';

export default function OverviewScreen() {
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      {/* Contenido principal de la aplicación */}
      <Button title="Open Modal" onPress={handleOpenModal} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
        style={{ height: modalVisible ? windowHeight / 2 : '50%' }}
      >
        <View style={styles.modalContainer}>
          {/* Contenido del modal */}
          <View style={styles.mainBox}>
            <Text>Modal</Text>
          </View>

          <Button title="Close Modal" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  mainBox: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
