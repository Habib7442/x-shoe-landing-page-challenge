import Content from "@/components/Content";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black w-full h-full">
      <div className="lg:px-10">
        <Navbar />
      </div>
      <div className="lg:p-10 p-5">
        <Content />
      </div>
    </main>
  );
}
