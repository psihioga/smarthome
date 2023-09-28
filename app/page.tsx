import { Menu as LeftMenu, MenuItem } from "./components/leftMenu/menu";
import House  from "@/icons/house.svg";
// import Environment  from "@/icons/leaf.svg";
// import energyconsumption  from "@/icons/kettle.svg";
// import security  from "@/icons/dots.svg";
// import iotdevices  from "@/icons/lamp.svg";
// import functionalarea  from "@/icons/bricks.svg";

const menuItems: MenuItem[] = [
  {
    text: "home",
    icon: House,
  },
  {
    text: "environment",
    // icon: Environment,
  },
  // {
  //   text: "energy-consumption",
  //   icon: energyconsumption,
  // },
  // {
  //   text: "security",
  //   icon: security,
  // },
  // {
  //   text: "iot-devices",
  //   icon: iotdevices,
  // },
  // {
  //   text: "functional-area",
  //   icon: functionalarea,
  // },
];




export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-start items-start">
      <LeftMenu items={menuItems}/>
      <main className="">
        <header>header</header>
        <section id="leftMenu" className="">
          main section
        </section>
      </main>

    </div>
  );
}
