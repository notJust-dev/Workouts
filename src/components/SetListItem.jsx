import { View, Text } from 'react-native';
import { formatDistanceToNow } from 'date-fns';

const SetListItem = ({ set }) => {
  const timestamp = parseInt(set._id.substr(0, 8), 16) * 1000;
  const createdAt = new Date(timestamp);

  return (
    <View
      style={{
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        gap: 5,
      }}
    >
      <Text style={{ fontWeight: 'bold' }}>
        {set.reps} x {set.weight}
      </Text>

      <Text style={{ color: 'gray' }}>{formatDistanceToNow(createdAt)}</Text>
    </View>
  );
};

export default SetListItem;
