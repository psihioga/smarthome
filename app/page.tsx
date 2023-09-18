import { Menu as LeftMenu, MenuItem } from "./components/leftMenu/menu";

const menuItems: MenuItem[] = [
  {
    text: "home",
    icon: "@/public/next.svg",
  },
  {
    text: "environment",
  },
  {
    text: "energy-consumption",
  },
  {
    text: "security",
  },
  {
    text: "iot-devices",
  },
  {
    text: "functional-area",
  },
];




export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-start items-start">
      <LeftMenu items={menuItems} />
      <main className="">
        <header>header</header>
        <section id="leftMenu" className="">
          main section
        </section>
      </main>

    </div>
  );
}
