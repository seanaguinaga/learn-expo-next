import { Text, View } from 'dripsy';
import { MotiView } from 'moti';
import { TextLink } from 'solito/link';

const HomeScreen: React.FC = () => (
  <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing' }}
  >
    <View
      sx={{
        backgroundColor: ['red', 'blue', 'green'],
        paddingX: '$2',
        paddingY: '$4',
      }}
    >
      <TextLink href="/about">
        <Text>Go to About screen</Text>
      </TextLink>

      <Text>This is the home screen.</Text>
    </View>
  </MotiView>
);

export { HomeScreen };
