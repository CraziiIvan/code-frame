import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

type TNumberInputProps = {
  id: string;
  state: number;
  action: ActionCreatorWithPayload<number>;
};

function NumberInput({ id, state, action }: TNumberInputProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <span className=" text-neutral-400 text-xs">
        {id.charAt(0).toLocaleUpperCase() + id.slice(1)}
      </span>
      <input
      max={30}
      min={3}
        type="number"
        value={state}
        onChange={(e) => dispatch(action(Number(e.target.value)))}
        className=" py-1 px-3 mt-2 bg-neutral-100 w-16 rounded-lg outline-none block text-neutral-500 border border-neutral-200"
      />
    </div>
  );
}

export default NumberInput;
