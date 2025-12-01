import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

const StyledSelect = ({ value, onValueChange, items }) => {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        className="
          w-full bg-slate-100 rounded-xl px-4 py-3 shadow-sm
          text-sm text-slate-700 cursor-pointer
          flex items-center justify-between
          focus:ring-2 focus:ring-teal-100 focus:border-teal-400
        "
      >
        <Select.Value />
        <ChevronDownIcon className="text-slate-500" />
      </Select.Trigger>

      {/* Portal fixes the layout spacing */}
      <Select.Portal>
        <Select.Content
          className="bg-white rounded-xl shadow-lg border p-1 z-50"
          sideOffset={6}
        >
          <Select.Viewport>
            {items.map((item) => (
              <Select.Item
                key={item}
                value={item}
                className="
                  px-4 py-2 rounded-md
                  cursor-pointer text-sm text-slate-700
                  hover:bg-slate-100 focus:bg-slate-100
                "
              >
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default StyledSelect;
