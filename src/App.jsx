import Header from "./components/Header/Header";
import Differences from "./components/Differences";
import PlusesGroups from "./components/PlusesGroups";
import PovapepeGemabody from "./components/PovapepeGemabody";
import IntroSection from "./components/IntroSection";
import TubsSection from "./components/TubsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TubsSection active={tab} onChange={(current) => setTab(current)} />

        {tab == "main" && (
          <>
            <PovapepeGemabody />
            <Differences />
          </>
        )}

        {tab == "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}

        {tab == "effect" && (
          <>
            <EffectSection />
          </>
        )}
      </main>
    </>
  );
}
