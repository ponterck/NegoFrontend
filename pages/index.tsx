import Link from "next/link";
import {Button} from "@/Components/ui/button"


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Button>
      <Link href="/login" className="text-white p-10">
          Ir a Login
        </Link>
      </Button>


    </div>
      
  );
}
