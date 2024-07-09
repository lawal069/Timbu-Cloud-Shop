"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";

const PaymentComp = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectionChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <RadioGroup
        defaultValue=""
        onValueChange={handleSelectionChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
      {selectedValue && <Button>Pay</Button>}
    </div>
  );
};

export default PaymentComp;
