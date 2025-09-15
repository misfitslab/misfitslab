import Image from "next/image";
import UnderConstruction from "./under-construction";

export default function Home() {
  const underConstruction = true;
  return (
    <>
      {underConstruction && <UnderConstruction />}
    </>
  );
}
