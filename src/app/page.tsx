import Image from "next/image";
import XALAppsLogo from "../resources/logo.svg";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center p-4">
        <div className="relative w-full h-full sm:w-96 sm:h-96">
            <Image
                src={XALAppsLogo}
                alt="XALApps logo"
                fill={true}
            />
        </div>
    </main>
  );
}
