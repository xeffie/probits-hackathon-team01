import { useContext } from "react";
import { ReflectionContext } from "./ReflectionContext";

export function useReflection() {
  const context = useContext(ReflectionContext);
  if (!context) {
    throw new Error("useReflection måste användas inuti <ReflectionProvider>");
  }
  return context;
}