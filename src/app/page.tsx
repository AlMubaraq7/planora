import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-center mx-auto container my-4">
      <h1 className="text-3xl mb-4">Home page</h1>
      <div className=" flex gap-2 justify-center">
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
