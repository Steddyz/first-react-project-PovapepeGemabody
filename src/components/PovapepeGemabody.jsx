import PlusesGroups from "./PlusesGroups";
import { ways } from "../data";

export default function PovapepeGemabody() {
  return (
    <section>
      <h3>Наш подход к общению</h3>

      <ul>
        {ways.map((way) => (
          <PlusesGroups key={way.description} {...way} />
        ))}
      </ul>
    </section>
  );
}
