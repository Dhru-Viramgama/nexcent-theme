import "@/styles/globals.scss";
import { NextUIProvider } from "@nextui-org/system";
import type { AppProps } from "next/app";
// import { useEffect } from "react";
// import confetti from 'canvas-confetti';
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  // const handleConfetti = () => {
  //   var end = Date.now() + (1 * 1000);

  //   // go Buckeyes!
  //   var colors = ['#bb0000', '#ffffff'];

  //   (function frame() {
  //     confetti({
  //       particleCount: 2,
  //       angle: 60,
  //       spread: 55,
  //       origin: { x: 0 },
  //       colors: colors
  //     });
  //     confetti({
  //       particleCount: 2,
  //       angle: 120,
  //       spread: 55,
  //       origin: { x: 1 },
  //       colors: colors
  //     });

  //     if (Date.now() < end) {
  //       requestAnimationFrame(frame);
  //     }
  //   }());
  // };

  // useEffect(() => {
  //   handleConfetti();
  // })

  return (
    <>
      <NextUIProvider>
        <Component {...pageProps} />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </NextUIProvider>
    </>
  )
}
