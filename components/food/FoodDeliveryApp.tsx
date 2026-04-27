"use client";

import { useState, useSyncExternalStore } from "react";
import { HomeScreen } from "@/components/food/HomeScreen";
import { OnboardingScreen } from "@/components/food/OnboardingScreen";
import { PhoneFrame } from "@/components/layout/PhoneFrame";

const STORAGE_KEY = "food-delivery-started";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

function getServerSnapshot() {
  return false;
}

export function FoodDeliveryApp() {
  const storedStarted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [startedOverride, setStartedOverride] = useState(false);
  const started = storedStarted || startedOverride;

  const handleGetStarted = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setStartedOverride(true);
  };

  return (
    <PhoneFrame>
      {started ? (
        <HomeScreen />
      ) : (
        <OnboardingScreen onGetStarted={handleGetStarted} />
      )}
    </PhoneFrame>
  );
}
