import { TNumberInputProps } from "../types/types";
import { useOptionsContext } from "../hooks/useOptionsContext";
import { capitalizeAndAddSpace } from "../utils/utils";

function NumberInput({ id, state }: TNumberInputProps) {

  const dispatch = useOptionsContext().dispatch

  return (
    <div>
      <span className=" text-neutral-400 dark:text-neutral-500 text-xs">
        {capitalizeAndAddSpace(id)}
      </span>
      <input
      max={30}
      min={3}
        type="number"
        value={parseInt(state)}
        onChange={(e) => dispatch({type: id, payload: e.target.value})}
        className=" py-1 px-3 mt-2 bg-neutral-100 dark:bg-neutral-900 w-16 rounded-lg outline-none block text-neutral-500 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800"
      />
    </div>
  );
}

export default NumberInput;
