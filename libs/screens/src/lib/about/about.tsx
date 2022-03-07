import { Button } from '@learn/components';
import { Text, View } from 'dripsy';
import { TextLink } from 'solito/link';

const AboutScreen: React.FC = () => {
  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextLink href="/home">
        <Text>Go back Home</Text>
      </TextLink>

      <Text>This is the about screen.</Text>

      <Button>Some button component</Button>
    </View>
  );
};

export { AboutScreen };
