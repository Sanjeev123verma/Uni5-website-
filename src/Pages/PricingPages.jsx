import React from "react";
import PricingPlans from "../components/PricingPlans";
import AddOns from "../components/AddOns";
import CTASection from "../components/CTASection";
import PricingPartners from "../components/PricingPartners";

const PricingPage = () => {
  return (
     <>
      <PricingPlans />
      <div className="max-w-[1280px] mx-auto">
      <AddOns />
      <PricingPartners/>
      <CTASection />
    </div>
    </>
  );
};

export default PricingPage;
