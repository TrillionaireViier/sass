"use client";

import React from "react";
import { useDesign } from "@/context/DesignContext";
import { AnimatePresence } from "framer-motion";
import * as Designs from "@/components/designs/Designs";

export default function Home() {
  const { activeDesign } = useDesign();

  const renderDesign = () => {
    switch (activeDesign) {
      case 1:
        return <Designs.Design1 key="d1" />;
      case 2:
        return <Designs.Design2 key="d2" />;
      case 3:
        return <Designs.Design3 key="d3" />;
      case 4:
        return <Designs.Design4 key="d4" />;
      case 5:
        return <Designs.Design5 key="d5" />;
      case 6:
        return <Designs.Design6 key="d6" />;
      case 7:
        return <Designs.Design7 key="d7" />;
      case 8:
        return <Designs.Design8 key="d8" />;
      case 9:
        return <Designs.Design9 key="d9" />;
      case 10:
        return <Designs.Design10 key="d10" />;
      case 11:
        return <Designs.Design11 key="d11" />;
      case 12:
        return <Designs.Design12 key="d12" />;
      case 13:
        return <Designs.Design13 key="d13" />;
      case 14:
        return <Designs.Design14 key="d14" />;
      case 15:
        return <Designs.Design15 key="d15" />;
      case 16:
        return <Designs.Design16 key="d16" />;
      case 17:
        return <Designs.Design17 key="d17" />;
      case 18:
        return <Designs.Design18 key="d18" />;
      case 19:
        return <Designs.Design19 key="d19" />;
      case 20:
        return <Designs.Design20 key="d20" />;
      case 21:
        return <Designs.Design21 key="d21" />;
      case 22:
        return <Designs.Design22 key="d22" />;
      default:
        return <Designs.Design1 key="default" />;
    }
  };

  return (
    <main className="flex-1 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {renderDesign()}
      </AnimatePresence>
    </main>
  );
}
