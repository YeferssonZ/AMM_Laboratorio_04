import React from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Carpetas = () => {
  const carpetas = [
    { id: 1, nombre: 'Rock' },
    { id: 2, nombre: 'Pop' },
    { id: 3, nombre: 'Electrónica' },
    { id: 4, nombre: 'Jazz' },
    { id: 5, nombre: 'Clásica' },
    { id: 6, nombre: 'Hip Hop' },
    { id: 7, nombre: 'Reggae' },
    { id: 8, nombre: 'Metal' },
    { id: 9, nombre: 'Rap' },
  ];

  const handleFolderPress = (nombre) => {
    console.log('Carpeta:', nombre);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar en las carpetas..."
          style={styles.searchInput}
        />
      </View>
      <View style={styles.folderImages}>
        {carpetas.map((carpeta) => (
          <TouchableOpacity
            key={carpeta.id}
            style={styles.folderImageContainer}
            onPress={() => handleFolderPress(carpeta.nombre)}
          >
            <Image
              source={require('./images/folder.png')}
              style={styles.folderImage}
            />
            <Text style={styles.folderName}>{carpeta.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const imageSize = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  folderImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  folderImageContainer: {
    width: '30%', // 3 imágenes en una fila
    alignItems: 'center',
    marginBottom: 20,
  },
  folderImage: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'contain',
  },
  folderName: {
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Carpetas;
