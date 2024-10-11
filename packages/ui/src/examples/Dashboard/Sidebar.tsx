import * as React from "react";
import { FaHome, FaUsers, FaCog } from "react-icons/fa";
import { Box } from "../../components/Box";
import { cx } from "../../utils";
import * as styles from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <Box className={cx([styles.base])}>
      <Box className={cx([styles.logoContainer])}>
        <img
          className={cx([styles.logo])}
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </Box>

      <Box className={cx([styles.listContainer])} asChild>
        <nav>
          <ul role="list" className={cx([styles.list])}>
            <li>
              <ul role="list" className={cx([styles.subList])}>
                <li>
                  <a className={cx([styles.navItem])} href="#">
                    <FaHome className={cx([styles.icon])} />
                    Dashboard
                  </a>
                </li>

                <li>
                  <a className={cx([styles.navItem])} href="#">
                    <FaUsers className={cx([styles.icon])} />
                    Team
                  </a>
                </li>

                <li>
                  <a className={cx([styles.navItem])} href="#">
                    <FaCog className={cx([styles.icon])} />
                    Projects
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Box>
    </Box>
  );
};

export { Sidebar };
