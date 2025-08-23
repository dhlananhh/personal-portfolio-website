import { StaticImageData } from "next/legacy/image";

// --- Testimonial Avatars ---
import JaneDoeAvatar from "../../public/images/avatars/jane-doe.png";
import JohnSmithAvatar from "../../public/images/avatars/john-smith.png";
import MichaelChenAvatar from "../../public/images/avatars/michael-chen.png";
import SophiaRodriguezAvatar from "../../public/images/avatars/sophia-rodriguez.png";
import DavidLeeAvatar from "../../public/images/avatars/david-lee.png";
import EmilyWhiteAvatar from "../../public/images/avatars/emily-white.png";

// --- Common Images & Placeholders ---
import ProfilePlaceholder from "../../public/images/profile-placeholder.png";
import ProjectPlaceholder from "../../public/images/project-placeholder.png";
import DefaultAvatar from "../../public/images/avatars/default-avatar.png";


// --- Export Object ---
export const Images: { [ key: string ]: StaticImageData } = {
  // Avatars
  JaneDoeAvatar,
  JohnSmithAvatar,
  MichaelChenAvatar,
  SophiaRodriguezAvatar,
  DavidLeeAvatar,
  EmilyWhiteAvatar,

  // Common
  ProfilePlaceholder,
  ProjectPlaceholder,
  DefaultAvatar,
};
