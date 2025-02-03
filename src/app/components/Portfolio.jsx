import React from "react";
import ProjectCard from "./ProjectCard";
import etherChecker from "../../../public/images/etherChecker.png";
import campaign from "../../../public/images/campaign.png";
import krypt from "../../../public/images/krypt.png";
import stake from "../../../public/images/stake.png";
import treasureBox from "../../../public/images/treasureBox.png";
import voom from "../../../public/images/voom.png";

const projects = [
  {
    title: "Ether Checker",
    description: "An app that checks ethereum wallet balances. It checks only sepoliaETH",
    image: etherChecker,
    link: "https://ether-checker.vercel.app/",
  },
  {
    title: "Crowdfunding DApp",
    description: "A decentralized application that allow users create campaigns and get donations",
    image: campaign,
    link: "https://crowdfunding-dapp-gamma.vercel.app/",
  },
  {
    title: "Krypt",
    description: "An app that allow users to transfer ether",
    image: krypt,
    link: "https://first-web3-0.vercel.app/",
  },
  {
    title: "Wallet Connect",
    description: "A test given to me by a client, it's just to connect wallet",
    image: stake,
    link: "https://web3-staking-app-ten.vercel.app/",
  },
  {
    title: "Treasure Box",
    description: "A collaboration with a team on a project",
    image: treasureBox,
    link: "https://treasure-box-eight.vercel.app/",
  },
  {
    title: "Voom",
    description: "A project built for a hackathon ",
    image: voom,
    link: "https://voom-tau.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 bg-[#0b043a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">My Portfolio</h2>
        <div className="flex overflow-x-scroll space-x-6 p-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
