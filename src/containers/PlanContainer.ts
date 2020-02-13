import { useState } from 'react';
import { createContainer } from 'unstated-next';

type Plan = {
  planID: string,
  planName: string,
}

const initialPlan: Plan = { planID: "1234567", planName: "Basic Plan" };

const usePlan = () => {
  const [plan, setPlan] = useState<Plan>(initialPlan);

  return { plan, setPlan }
};

const PlanContainer = createContainer(usePlan);

export { PlanContainer }