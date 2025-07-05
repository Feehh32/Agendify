import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `Agendify | ${title}`;
  }, [title]);
};

export default usePageTitle;
