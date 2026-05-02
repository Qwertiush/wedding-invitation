import { useMemo } from "react";
import Hero from "./components/hero/Hero"
import Invite from "./components/invite/Invite";
import Gifts from "./components/gifts/Gifts";
import Confirmation from "./components/confirmation/Confirmation";
import ScrollAnimations from "./components/utilitis/ScrollAnimations";

function App() {

  const slug =
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.pathname.split("/").filter(Boolean)[0] || "")
    : "";

  const fullName = useMemo(() => {
    if (!slug) return "Szanowny Gościu";

    return slug
      .split("-")
      .map((part) => {
          if(part != "i"){
            return part.charAt(0).toUpperCase() + part.slice(1)
          }
          else{
            return part
          }
      })
      .join(" ");
  }, [slug]);

  return (
      <>
        <ScrollAnimations/>

        <Hero/>
        <Invite fullName={fullName} />
        <Gifts/>
        <Confirmation/>
      </>
        
  )
}

export default App
