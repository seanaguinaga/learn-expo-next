import { Pressable, Text } from 'dripsy';

const Button: React.FC = ({ children }) => (
  <Pressable
    sx={{
      backgroundColor: '$primary',
      color: 'white',
      paddingX: '$2',
      paddingY: '$4',
      fontFamily: '$body',
    }}
    onPress={() => {
      alert('You pressed the button!');
    }}
  >
    <Text>{children}</Text>
  </Pressable>
);

export { Button };
