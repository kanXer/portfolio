import About from "../../../components/about.js";
import Navbar from "../../../components/navbar.js";
export const metadata = {
    title: "Sahil Lala: About Me",
    description: "Generated by create next app",
  };
export default function AboutMe() {
    return (
        <div>
          <Navbar />
          <About />
        </div>
    );
  }