import Aboutme from "../sections_about/Aboutme";
import Background from "../sections_about/Background";
import Drawing from "../sections_about/Drawing";
import TransitionOverlay from "../components/TransitionOverlay";

export default function Page() {
  return (
    <div className="relative">
      <TransitionOverlay />
      <div className="relative z-10">
        <Aboutme />
        <Background />
        <Drawing />
      </div>
    </div>
  );
}