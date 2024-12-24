import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Divider, IconButton, Typography } from "@mui/material";
const Footer = () => {
  const getSocialMediaSection = () => {
    return (
      <section className=" flex items-center">
        <Typography variant="p" className="p-2">
          Follo us
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </section>
    );
  };
  return (
    <footer className="px-4 py-6 flex justify-between">
      <section>
        {new Date().getFullYear()} Alpha Square. All Rights Reserved.
      </section>
      <section>{getSocialMediaSection()}</section>
    </footer>
  );
};

export default Footer;
