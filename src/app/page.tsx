import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Market from "@/components/Market";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Hero />
        <Market />
      </div>

      <Footer />
    </main>
  );
}
