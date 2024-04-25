import Header from "@/shared/components/header/header";
import Slack from "@/shared/components/slack footer/slack";
import "./page.css";
import Contact from "@/pages/contact/contact";
import Enterprise from "@/pages/enterprise/enterprise";
import About from "@/pages/about/about";
import HomePage from "@/pages/home/home";



export default function Home() {
  return (
    <div className="contact">
      <Header />
      {/* <HomePage /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Enterprise />
    </div >
  );
}
