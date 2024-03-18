import { Container, Text } from "@components/restyled";
import { useLocalSearchParams } from "expo-router";

export default function FeedDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Container alignItems="center" justifyContent="center">
      <Text>Feed {id}</Text>
    </Container>
  );
}
