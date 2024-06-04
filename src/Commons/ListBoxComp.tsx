import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const people = [
  { id: 1, name: "May" },
  { id: 2, name: "June" },
  { id: 3, name: "July" },
];

function ListBoxComp() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="mx-auto w-28 ">
      <Listbox
        value={selected}
        onChange={setSelected}
      >
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg  py-1.5 pr-8 pl-3 text-left text-sm/6 text-black",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
          )}
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            anchor="bottom"
            className="backdrop-blur w-[var(--button-width)] rounded-xl mt-2 border border-black/5 bg-black/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            {people.map((person) => (
              <ListboxOption
                key={person.name}
                value={person}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
              >
                <CheckIcon className="invisible size-4 fill-blue-800 group-data-[selected]:visible" />
                <div className="text-sm/6 text-black">{person.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
}
export default ListBoxComp;
