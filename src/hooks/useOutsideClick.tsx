import { useEffect } from "react";
import type { TUseOutsideClickProps } from "../types/types";

function useOutsideClick({dispatch, refs}: TUseOutsideClickProps) {

    function outsideClickHandle(e: MouseEvent) {
        if(refs.every(ref => ref.current !== e.target)) {
            dispatch(false)
        }
    }

    useEffect(() => {
        window.addEventListener("click", outsideClickHandle)
    })
}

export default useOutsideClick