import { TaskStatus } from "@prisma/client";
import { Status } from "../lib/utils/status";

import "./styles/statusSelector.css";

type Props = {
  defaultChecked?: TaskStatus | null;
};

export default function StatusSelector({ defaultChecked }: Props) {
  return (
    <ul className="status_selector">
      {Object.entries(Status).map((object, index) => {
        const [key, value] = object;
        return (
          <li
            key={index}
            className={`status_selector__item ${key}`}
            tabIndex={-1}
          >
            <label>
              <div className={`status_icon ${key}`}>{value.icon}</div>
              <span>{value.text}</span>
              <input
                type="radio"
                name="status"
                defaultValue={key}
                defaultChecked={defaultChecked === key}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
}
