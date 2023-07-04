import { SocialLinks } from "../SocialLinks";

export const Footer = () => (
  <footer className="flex justify-between w-full items-center p-8 pb-0">
    <SocialLinks size="sm" />
    <img
      src="/svgs/vans.svg"
      alt="Vans"
      width={150}
      height={150}
      className="opacity-95"
    />
  </footer>
);
