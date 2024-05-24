import Manager from "@/components/Manager";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="gap-9 p-40 mt-10 items-center justify center">
        <Manager />
      </div>
    </div>
  );
}

