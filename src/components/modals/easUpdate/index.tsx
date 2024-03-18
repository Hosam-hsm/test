import { Text, Touchable } from "@components/restyled";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import * as Updates from "expo-updates";
import React, { Ref, forwardRef, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useStyles from "./styles";
import CustomBackdrop from "../customBackdrop";

const EasUpdateModal = forwardRef((_, ref: Ref<BottomSheetModal>) => {
  const styles = useStyles();
  const insets = useSafeAreaInsets();
  const { isUpdatePending, isDownloading, isUpdateAvailable } =
    Updates.useUpdates();

  const onPressConfirmBtn = async () => {
    if (!isUpdatePending) {
      close();
    } else {
      await Updates.reloadAsync();
    }
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
    if (isUpdateAvailable) {
      open();
    }
  }, [isUpdateAvailable]);

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
        <Text variant="heading-h2">New update is available</Text>

        <Image
          style={styles.image}
          source={require("../../../../assets/illustrations/new-update-available.jpg")}
          contentFit="contain"
          transition={1000}
        />

        <Text variant="body-m">
          To ensure you don't miss any new features, we will keep updating your
          app in background.
        </Text>

        {isDownloading && (
          <Text variant="body-xs" color="textLighter">
            Downloading updates...
          </Text>
        )}

        {isUpdatePending && (
          <Text variant="body-xs" color="textLighter" lineHeight={14}>
            Downloaded updates. Updates will be installed when you open the app
            next time. You can also relaunch the app now to install the updates
            instantly.
          </Text>
        )}

        <Touchable
          padding="xl"
          width="100%"
          alignItems="center"
          justifyContent="center"
          backgroundColor="actionPrimary"
          borderRadius="m"
          onPress={onPressConfirmBtn}
        >
          <Text variant="action-m-semiBold" color="textOnPrimary">
            {isUpdatePending ? "Relaunch Now" : "Okay"}
          </Text>
        </Touchable>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default EasUpdateModal;
