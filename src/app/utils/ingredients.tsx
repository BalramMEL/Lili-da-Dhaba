import Potato from "../icons/Potato";
import Egg from "@/app/icons/Egg";
import Vegetable from "@/app/icons/Vegetable";
import Heart from "@/app/icons/Heart";
import Arrow from "../icons/Arrow";

export const ingredients = [
  {
    id: "potato",
    name: "Quality Potato",
    desc: "Carefully selected to ensure the perfect texture",
    icon: <Potato />,
    arrow: <Arrow color="#9219E2" />,
  },
  {
    id: "egg",
    name: "Fresh Eggs",
    desc: "They give softness, consistency and a unique flavor to the dough",
    icon: <Egg />,
    arrow: <Arrow color="#DD1717" />,
  },
  {
    id: "seasoning",
    name: "Special Secret Touch",
    desc: "An exclusive blend for an irresistible aroma",
    icon: <Vegetable />,
    arrow: <Arrow color="#4C9696" />,
  },
  {
    id: "love",
    name: "Family Love",
    desc: "A differentiated affection, passed from generation to generation",
    icon: <Heart />,
    arrow: <Arrow color="#6900AE" />,
  },
];
