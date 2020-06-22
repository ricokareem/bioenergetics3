import React from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { Video } from "expo-av";
import { Movies } from "../constants/MediaData";

const ReferenceGuideMedia = (props) => {
    const { route } = props;
    const { title, playlist } = route.params;

    const movieMap = playlist.map(movieId => Movies.find(movie.id));
    console.log("*****", movieMap);

    return (
        <ScrollView style={styles.container}>
            <Card
                title={title}
            >
                {movieMap.map(movie => (
                    <Video
                        source={require(`../media/${movie.file}`)}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping={false}
                        style={styles.backgroundVideo}
                    />
                    // <Text style={{marginBottom: 10}}>
                    //     {movie.description}
                    // </Text>
                )}
            </Card>
        </ScrollView>
    );
};

ReferenceGuideMedia.propTypes = {
    route: PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
        params: PropTypes.object,
    }),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fc9829",
    },
    backgroundVideo: {
        width: "100%",
        height: "40vh",
    },
});

export default ReferenceGuideMedia;
