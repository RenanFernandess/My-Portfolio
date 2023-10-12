import { imgImpacto, minasTicket, sportBike } from "./images";

type Project = {
  title: string;
  img: string;
  href: string;
}

export default [
  {
    title: "Impacto Academia App",
    img: imgImpacto,
    href: "https://www.figma.com/proto/wSHynpDCKyY2z49iGfXrpp/Impacto-academia?type=design&node-id=227-520&t=Joc9Dbg87Vsc1eSU-1&scaling=min-zoom&page-id=227%3A326&starting-point-node-id=227%3A520&show-proto-sidebar=1&mode=design"
  },
  {
    title: "Minas Ticket",
    img: minasTicket,
    href: "https://docs.google.com/presentation/d/1AgjKgYDpAKxaNF6E2oNVnHdbwY0G1ELMumzCIDKJYMc/edit?usp=sharing"
  },
  {
    title: "Sport Bike",
    img: sportBike,
    href: "https://docs.google.com/presentation/d/1jnxBIYcxHo5XBYVG-LriOPu1sxYW7s0P8hVfcQ5qpf8/edit#slide=id.ge4c37863e3_0_352"
  }
] as Project[];
