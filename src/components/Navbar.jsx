import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },
 
];
export const Navbar = () => {
  return (
    <div style={{ backgroundcolor: "black", padding: "10px" }}>
    
      {links.map(({ title,link }, index) => (
        <NavLink to={link} style={{textDecoration:"none",padding:"20px"}} key={index}>
      {title}
      </NavLink>
))}
    </div >
    );
};
