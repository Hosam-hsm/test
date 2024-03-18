import toast from "@components/toast";
import NetInfo from "@react-native-community/netinfo";
import { useEffect } from "react";

const useNetInfo = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        toast.showErrorToast("No internet connection");
      }
    });

    return unsubscribe;
  }, []);
};

export default useNetInfo;
