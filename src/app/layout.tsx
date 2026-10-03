import type { Metadata } from "next"
import { Oswald, Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"
import { PlanProvider } from "@/context/PlanContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"

const oswald = Oswald({
	subsets: ["latin"],
	variable: "--font-oswald",
	weight: ["400", "500", "600", "700"],
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "FitLog | Train With Intent",
	description:
		"FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${oswald.variable} ${inter.variable} font-sans`}>
				<PlanProvider>
					<Navbar />
					<main className="min-h-screen">{children}</main>
					<Footer />
					<Toaster
						position="top-right"
						toastOptions={{
							style: {
								background: "#1a1a1a",
								color: "#fff",
								border: "1px solid #2a2a2a",
							},
							success: {
								iconTheme: { primary: "#ccff00", secondary: "#0a0a0a" },
							},
						}}
					/>
				</PlanProvider>
			</body>
		</html>
	)
}