import { View, Text, StyleSheet } from 'react-native';
import { LineGraph } from 'react-native-graph';

const ProgressGraph = () => {
  const points = [
    {
      date: new Date('2024-01-01'),
      value: 10,
    },
    {
      date: new Date('2024-01-02'),
      value: 15,
    },
    {
      date: new Date('2024-01-03'),
      value: 8,
    },
    {
      date: new Date('2024-01-04'),
      value: 17,
    },
  ];

  return (
    <View style={styles.container}>
      <Text>Progress Graph</Text>

      <LineGraph
        points={points}
        animated={false}
        color="#4484B2"
        style={styles.graph}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  graph: {
    width: '100%',
    height: 200,
  },
});

export default ProgressGraph;
