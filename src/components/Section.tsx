import { LevelContext } from "../context/LevelContext";

type Props = {
  level: number;
  children?: string | React.ReactNode;
};

export default function Section({ level, children }: Props) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
