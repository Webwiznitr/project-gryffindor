import localFont from "next/font/local";
import { Outfit, Inter } from "next/font/google";

export const cattedrale = localFont({
    src: "../fonts/Cattedrale-Demo-Regular.ttf",
});
export const spirits = localFont({ src: "../fonts/spirits-sharp-light.otf" });
export const shlop = localFont({ src: "../fonts/shlop rg.otf" });
export const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

export const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-inter",
});
