/* eslint-disable max-len */
import { Path, Svg } from "react-native-svg";

import { colors } from "../constants/colors";

function CartIcon({ color = colors.white }) {
  return (
    <Svg width="20" height="21" fill="none" viewBox="0 0 20 21">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.75 9V4.5a3.75 3.75 0 00-7.5 0V9m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H2.25a1.126 1.126 0 01-1.12-1.243l1.264-12A1.125 1.125 0 013.513 6h12.974c.576 0 1.059.435 1.119 1.007zM6.625 9a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </Svg>
  );
}

function TrashIcon() {
  return (
    <Svg width="18" height="22" fill="none" viewBox="0 0 18 22">
      <Path
        stroke="#4A4A4A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.74 8l-.346 9m-4.788 0L6.26 8m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.166L15.16 18.673a2.25 2.25 0 01-2.244 2.077H5.084a2.25 2.25 0 01-2.244-2.077L1.772 4.79m14.456 0a48.108 48.108 0 00-3.478-.397M1.772 4.79a43.48 43.48 0 00-1.022.165m1.022-.165a48.111 48.111 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.967 51.967 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.668 48.668 0 00-7.5 0"
      />
    </Svg>
  );
}

function HomeIcon({ color }: { color: string }) {
  return (
    <Svg width="22" height="21" fill="none" viewBox="0 0 22 21">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.25 10.5l8.954-8.955a1.126 1.126 0 011.591 0L20.75 10.5M3.5 8.25v10.125c0 .621.504 1.125 1.125 1.125H8.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V19.5h4.125c.621 0 1.125-.504 1.125-1.125V8.25M7.25 19.5h8.25"
      />
    </Svg>
  );
}

function MenuIcon({ color }: { color: string }) {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.75 6.5A2.25 2.25 0 016 4.25h2.25A2.25 2.25 0 0110.5 6.5v2.25A2.25 2.25 0 018.25 11H6a2.25 2.25 0 01-2.25-2.25V6.5zm0 9.75A2.25 2.25 0 016 14h2.25a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6.5a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 0118 11h-2.25a2.25 2.25 0 01-2.25-2.25V6.5zm0 9.75A2.25 2.25 0 0115.75 14H18a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 0118 20.75h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z"
      />
    </Svg>
  );
}

function AccountIcon() {
  return (
    <Svg width="33.333" height="33.333" viewBox="0 0 25 25">
      <Path
        d="M63 218c-6-7-15-33-21-57-9-39-8-45 12-66 13-13 22-34 22-51-1-27 1-29 45-32 38-2 52 2 78 23 41 35 40 61-3 79-23 10-42 28-55 55-12 22-30 45-40 51-25 13-26 13-38-2z"
        transform="matrix(.1 0 0 -.1 0 25)"
      />
    </Svg>
  );
}

export { CartIcon, TrashIcon, HomeIcon, MenuIcon, AccountIcon };
