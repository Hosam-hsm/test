import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "@common/graphql/queries";
import { Container, Text } from "@components/restyled";
import { ActivityIndicator } from "react-native";

export default function ProfileScreen() {
  const { data: currentUserData, loading } = useQuery(GET_CURRENT_USER);

  return (
    <Container alignItems="center" justifyContent="center">
      {loading ? (
        <ActivityIndicator animating />
      ) : (
        <Text>
          {currentUserData?.getCurrentUser?.firstName}{" "}
          {currentUserData?.getCurrentUser?.lastName}
        </Text>
      )}
    </Container>
  );
}
