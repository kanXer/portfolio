import Navbar from "../../../components/navbar.js";
export const metadata = {
    title: "Sahil Lala: Resume",
    description: "Generated by create next app",
  };
export default function Resume() {
    return (
        <div>
          <Navbar />
            <div className="flex justify-around items-center" >
              <embed src="lala.pdf" type="application/pdf" width="1095px" height="900px" />
            </div>
        </div>
    );
  }