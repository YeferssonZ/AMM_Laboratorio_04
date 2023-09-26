import React from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Album = () => {
  const albumImages = [
    { source: require('./images/album02.jpg'), id: 1 },
    { source: require('./images/album03.jpg'), id: 2 },
    { source: require('./images/album04.png'), id: 3 },
    // Agrega más imágenes de álbum aquí
  ];

  const handleImagePress = (id) => {
    // Acción al hacer clic en la imagen (puedes agregar funcionalidad aquí)
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar en el álbum..."
          style={styles.searchInput}
        />
      </View>
      <View style={styles.albumImages}>
        {albumImages.map((image) => (
          <TouchableOpacity
            key={image.id}
            style={styles.albumImageContainer}
            onPress={() => handleImagePress(image.id)}
          >
            <Image
              source={image.source}
              style={styles.albumImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

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
  albumImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  albumImageContainer: {
    width: '32%', // 3 imágenes en una fila
    aspectRatio: 1,
    marginBottom: 10,
  },
  albumImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default Album;
