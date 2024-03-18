import { useReactiveVar } from "@apollo/client";
import { notificationPermissionBlockedVar } from "@common/reactiveVariables";
import { Text, Touchable } from "@components/restyled";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import Constants from "expo-constants";
import { Image } from "expo-image";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import React, { Ref, forwardRef, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useStyles from "./styles";
import CustomBackdrop from "../customBackdrop";

const NotificationPermissionModal = forwardRef(
  (_, ref: Ref<BottomSheetModal>) => {
    const styles = useStyles();
    const insets = useSafeAreaInsets();
    const notificationPermissionBlocked = useReactiveVar(
      notificationPermissionBlockedVar,
    );
    const notificationPermissionModalLastShownAt = SecureStore.getItem(
      "notificationPermissionModalLastShownAt",
    );
    const differenceInHrs = dayjs().diff(
      notificationPermissionModalLastShownAt,
      "h",
    );

    const onPressGoToSettings = () => {
      Linking.openSettings();
      close();
    };

    const close = () => {
      if (typeof ref === "function") {
        ref(null);
      } else if (ref && ref.current) {
        ref.current.close();
      }
    };

    const open = () => {
      if (typeof ref === "function") {
        ref(null);
      } else if (ref && ref.current) {
        ref.current.present();
      }
    };

    useEffect(() => {
      if (notificationPermissionBlocked && differenceInHrs > 23) {
        SecureStore.setItem(
          "notificationPermissionModalLastShownAt",
          new Date().toISOString(),
        );

        open();
      }
    }, [notificationPermissionBlocked, differenceInHrs]);

    return (
      <BottomSheetModal
        ref={ref}
        enableDynamicSizing
        backdropComponent={(props) => (
          <CustomBackdrop {...props} onPress={close} />
        )}
        bottomInset={insets.bottom}
        detached
        enablePanDownToClose
        style={styles.sheetContainer}
      >
        <BottomSheetView style={styles.main}>
          <Text variant="heading-h2">Turn on notifications</Text>

          <Image
            style={styles.image}
            source={require("../../../../assets/illustrations/unread-bell-notification.jpg")}
            contentFit="contain"
            transition={1000}
          />

          <Text variant="body-m">
            To ensure you don't miss any important updates, please enable
            notifications.
          </Text>

          <Text variant="body-xs" color="textLighter">
            Settings {">"} Apps {">"} {Constants.expoConfig.name} {">"}{" "}
            Permissions
          </Text>

          <Touchable
            padding="xl"
            width="100%"
            alignItems="center"
            justifyContent="center"
            backgroundColor="actionPrimary"
            borderRadius="m"
            onPress={onPressGoToSettings}
          >
            <Text variant="action-m-semiBold" color="textOnPrimary">
              Go to Settings
            </Text>
          </Touchable>

          <Touchable onPress={close}>
            <Text variant="action-m-semiBold" color="actionPrimary">
              Remind me later
            </Text>
          </Touchable>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default NotificationPermissionModal;
