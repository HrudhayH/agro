import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ComingSoon from "@/components/home/ComingSoon";
import HistorySection from "@/components/home/HistorySection";
import HealthCautionaries from "@/components/home/HealthCautionaries";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ComingSoon />
        <HistorySection />
        <HealthCautionaries />
      </main>
      <Footer />
    </>
  );
}
