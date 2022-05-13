import { useState, useEffect, createRef } from "react";

function useGroupSection({ group, filter }) {
  let [show, setShow] = useState(true);
  let [child, setChild] = useState(0);
  let ref = createRef();
  useEffect(() => {
    Array.from(ref.current.children[1].children).length || child > 0
      ? setShow(true)
      : setShow(false);
    return () => {};
  }, [filter, group, ref, child]);
  useEffect(() => {
    setChild(0);
    return () => {};
  }, [group]);

  return { ref, show, child, setChild, show, setShow };
}

export default useGroupSection;
