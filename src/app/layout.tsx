import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Foody-Heaven",
	description: "Food order App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={rubik.className}>
				<main className="min-h-screen flex flex-col">
					<Header />
					<div className="flex-1"> {children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
