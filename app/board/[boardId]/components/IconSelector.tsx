import { TaskIcon } from "@prisma/client";
import { Icons } from "../lib/utils/icons";

import "./styles/iconSelector.css";

type Props = {
  defaultChecked?: TaskIcon | null;
};

export default function IconSelector({ defaultChecked }: Props) {
  return (
    <ul className="icon_selector">
      {Object.entries(Icons).map((object, index) => {
        const [key, value] = object;
        return (
          <li key={index}>
            <label>
              {value}
              <input
                type="radio"
                name="icon"
                defaultValue={key}
                defaultChecked={key === defaultChecked}
                hidden
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
}
