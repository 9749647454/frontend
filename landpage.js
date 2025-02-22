import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#6d28d9] text-white p-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Auction App</h1>
          <nav className="space-x-4">
            <Link href="/signup" className="hover:underline">Signup</Link>
            <Link href="/signin" className="hover:underline">Signin</Link>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <Link href="/post-auction" className="hover:underline">Post Auction</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 mt-8">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <h2 className="text-2xl font-bold">Welcome to Auction App</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Join the best online auction platform to buy and sell goods effortlessly. 
              Bid on exclusive items, find great deals, and connect with a community of sellers and buyers!
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-[#6d28d9] hover:bg-[#5b21b6]">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard">View Auctions</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2 text-sm text-gray-500">
            <p>© 2024 Auction App. All rights reserved.</p>
            <p>Join now and experience the thrill of online bidding!</p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
