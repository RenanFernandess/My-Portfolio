import { imgImpacto, minasTicket, sportBike } from "./images";

type Project = {
  title: string;
  img: string;
  href: string;
  description: string;
  tag: string;
}

export default [
  {
    title: "Impacto Academia App",
    img: imgImpacto,
    href: "https://www.figma.com/proto/wSHynpDCKyY2z49iGfXrpp/Impacto-academia?type=design&node-id=227-520&t=Joc9Dbg87Vsc1eSU-1&scaling=min-zoom&page-id=227%3A326&starting-point-node-id=227%3A520&show-proto-sidebar=1&mode=design",
    description: "Aplicativo para gerenciamento de academias, com foco em controle de alunos, treinos e finanças.",
    tag: "Prototype"
  },
  {
    title: "Minas Ticket",
    img: minasTicket,
    href: "https://docs.google.com/presentation/d/1AgjKgYDpAKxaNF6E2oNVnHdbwY0G1ELMumzCIDKJYMc/edit?usp=sharing",
    description: "Plataforma de venda de ingressos para cinemas.",
    tag: "Estudo de caso"
  },
  {
    title: "Sport Bike",
    img: sportBike,
    href: "https://docs.google.com/presentation/d/1jnxBIYcxHo5XBYVG-LriOPu1sxYW7s0P8hVfcQ5qpf8/edit#slide=id.ge4c37863e3_0_352",
    description: "Plataforma de venda de bicicletas.",
    tag: "Estudo de caso"
  }
] as Project[];
