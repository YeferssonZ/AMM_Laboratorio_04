import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MusicPlayer = () => {
  const playlist = [
    { artist: 'Linkin Park', title: 'Numb', albumCover: require('./images/linkin.jpg') },
    { artist: 'Linkin Park', title: 'In the End', albumCover: require('./images/linkin.jpg') },
    { artist: 'Linkin Park', title: 'Crawling', albumCover: require('./images/linkin.jpg') },
    { artist: 'Rammstein', title: 'Du Hast', albumCover: require('./images/rammstein.jpg') },
    { artist: 'Rammstein', title: 'Sonne', albumCover: require('./images/rammstein.jpg') },
    { artist: 'Rammstein', title: 'Engel', albumCover: require('./images/rammstein.jpg') },
    { artist: 'Michael Jackson', title: 'Billie Jean', albumCover: require('./images/michael.png') },
    { artist: 'Michael Jackson', title: 'Thriller', albumCover: require('./images/michael.png') },
    { artist: 'Michael Jackson', title: 'Smooth Criminal', albumCover: require('./images/michael.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.albumInfo}>
        <Image
          source={require('./images/cubierta.jpg')}
          style={styles.albumCover}
        />
        <View style={styles.songDetails}>
          <Text style={styles.songTitle}>Boku no Sensou</Text>
          <Text style={styles.artist}>Shinsei Kamattechan</Text>
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('./images/prev_button.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('./images/play_button.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('./images/next_button.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar canciones..."
          style={styles.searchInput}
        />
      </View>
      <View style={styles.playlistContainer}>
        <ScrollView>
          {playlist.map((song, index) => (
            <TouchableOpacity
              key={index}
              style={styles.songContainer}
              onPress={() => {}}
            >
              <Image
                source={song.albumCover}
                style={styles.playlistImage}
              />
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  albumInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  albumCover: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 16,
    color: 'gray',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  controlButton: {
    marginHorizontal: 20,
  },
  controlIcon: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  playlistContainer: {
    flex: 1,
    width: '100%',
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playlistImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
});

export default MusicPlayer;
