import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";
import type { Technology } from "./types/technology";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {

    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack`
      );

      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack`
    );
  };

  const handleRemove = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter(
        (technology) => technology.id !== id
      )
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Technologies
          stack={stack}
          onAddToStack={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </>
  );
}

export default App;