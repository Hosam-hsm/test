import { useReactiveVar } from "@apollo/client";
import { expoPushTokenVar } from "@common/reactiveVariables";
import EasUpdateModal from "@components/modals/easUpdate";
import NotificationPermissionModal from "@components/modals/notificationPermission";
import { Container, Text, Touchable } from "@components/restyled";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { useRef } from "react";
import { Button } from "react-native";

async function sendPushNotification(expoPushToken: string) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Feed 12345",
    body: "Deep linking",
    data: { url: "/feed/12345" },
  };

  await fetch("https://exp.host/--/api/v2/push/send?useFcmV1=true", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

export default function FeedScreen() {
  const expoPushToken = useReactiveVar(expoPushTokenVar);

  const notificationPermissionModalRef = useRef<BottomSheetModal>(null);
  const easUpdateModalRef = useRef<BottomSheetModal>(null);

  return (
    <Container padding="none">
      <Container variant="scrollview" contentContainerStyle={{ gap: 8 }}>
        {["1", "2", "3"].map((feed) => (
          <Link
            key={feed}
            href={{
              pathname: "/(authenticated)/(dashboard)/feed/[id]",
              params: { id: feed },
            }}
            asChild
          >
            <Touchable
              height={100}
              width="100%"
              alignItems="center"
              justifyContent="center"
              backgroundColor="actionLightest"
            >
              <Text>Feed {feed}</Text>
            </Touchable>
          </Link>
        ))}

        <Button
          title="Generate Sentry Error"
          onPress={() => {
            throw new Error("Hello, again, Sentry!");
          }}
        />

        <Button
          title="Send Notification"
          onPress={async () => {
            await sendPushNotification(expoPushToken);
          }}
        />
      </Container>
      <NotificationPermissionModal ref={notificationPermissionModalRef} />
      <EasUpdateModal ref={easUpdateModalRef} />
    </Container>
  );
}
