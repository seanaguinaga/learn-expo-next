import { Pressable, Text } from "dripsy";

const Button: React.FC = ({ children }) => (
  <Pressable
    sx={{
      borderRadius: 8,
      backgroundColor: "$primary",
      color: "$text",
      paddingX: "$2",
      paddingY: "$4",
      fontFamily: "$body",
    }}
    onPress={() => {
      alert("You pressed the button!");
    }}
  >
    <Text>{children}</Text>
  </Pressable>
);

export { Button };
