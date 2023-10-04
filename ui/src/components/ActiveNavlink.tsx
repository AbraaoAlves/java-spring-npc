import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

export default function ActiveNavLink ({children, to}: Props) {
  return <NavLink to={to}
  className={({ isActive, isPending }) =>
  isActive
    ? "active"
    : isPending
    ? "pending"
    : ""
}
>{children}</NavLink>
}