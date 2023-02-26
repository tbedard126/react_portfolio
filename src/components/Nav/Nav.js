import React from "react";

// const NavTabs = ({ currentPage, handlePageChange }) => {
//   return (
//     <ul className="nav nav-tabs text-center">
//       <li className="nav-item text-center">
//         <a
//           href="#home"
//           onClick={() => handlePageChange("Home")}
//           // this is a ternary operator, it is checking if you are on the homepage. if you are on the homepage it will render the active navlink if not the other one

//           className={currentPage === "Home" ? "nav-link active" : "nav-link"}
//         >
//           Home
//         </a>
//       </li>

//       <li className="nav-item text-center">
//         <a
//           href="#project"
//           onClick={() => handlePageChange("Blog")}
//           // this is a ternary operator, it is checking if you are on the blog page. if you are on the about it will render the active navlink if not the other one

//           className={currentPage === "Project" ? "nav-link active" : "nav-link"}
//         >
//           Projects
//         </a>
//       </li>
//       <li className="nav-item text-center">
//         <a
//           href="#contact"
//           // this is the click event handeler for the contact page, this is checking if the page you are on is contact and rendering the correct page, if not renders the other
//           onClick={() => handlePageChange("Contact")}
//           className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// };

const NavTabs = ({ currentPage, handlePageChange }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className="nav nav-tabs text-center">
      {links.map((link) => (
        <li className="nav-item text-center" key={link.name}>
          <a
            href={link.href}
            onClick={() => handlePageChange(link.name)}
            className={`nav-link${currentPage === link.name ? " active" : ""}`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default NavTabs;
