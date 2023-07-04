import type { SocialLinkProps } from "./SocialLink";
import { SocialLink, socials } from "./SocialLink";

export type SocialListProps = {
  size?: "sm" | "md";
};

export const SocialLinks = ({ size = "md" }: SocialListProps) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {Object.keys(socials).map((social) => (
        <SocialLink
          key={social}
          social={social as SocialLinkProps["social"]}
          size={size}
        />
      ))}
    </div>
  );
};
