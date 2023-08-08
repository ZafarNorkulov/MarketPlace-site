import { Drawer } from "antd";
import React, { Dispatch } from "react";

const CategoryMenu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: Dispatch<boolean>;
}) => {
  return <Drawer open={openMenu} placement="left" onClose={() => setOpenMenu(false)} width={1050}>
  </Drawer>;
};

export default CategoryMenu;
