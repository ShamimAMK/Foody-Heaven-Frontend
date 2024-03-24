import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyAuth0Provider from "@/provider/MyAuth0Provider";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Foody-Heaven",
	description: "Food order App",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<MyAuth0Provider>
			<html lang="en" className="scroll-smooth">
				<body className={rubik.className}>
					<main className="min-h-screen flex flex-col">
						<Header />
						<div className="flex-1"> {children}</div>
					</main>
					<Footer />
				</body>
			</html>
		</MyAuth0Provider>
	);
};

export default RootLayout;
