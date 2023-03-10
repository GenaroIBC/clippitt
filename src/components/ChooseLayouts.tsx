import { Layout } from "@/types";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const LAYOUTS: { url: string; id: string; layout: Layout }[] = [
  { url: "/rounded.webp", id: uuid(), layout: "rounded" },
  { url: "/normal.webp", id: uuid(), layout: "normal" },
];

type Props = {
  // eslint-disable-next-line no-unused-vars
  onNewLayout: (layout: Layout) => void;
};

export function ChooseLayouts({ onNewLayout }: Props) {
  return (
    <section>
      <h4 className="text-2xl mb-8 font-bold text-center">Choose a layout</h4>

      <div className="flex justify-center gap-8">
        {LAYOUTS.map((layout) => (
          <button
            className="p-0 hover:scale-105 hover:shadow-2xl transition-transform"
            key={layout.id}
            onClick={() => onNewLayout(layout.layout)}
          >
            <Image
              className="max-w-sm rounded"
              width={200}
              height={200}
              src={layout.url}
              alt="layout preview"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
