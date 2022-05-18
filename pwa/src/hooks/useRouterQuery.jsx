import { parse, stringify } from "qs";
import { useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { cloneDeep } from "lodash-es";

export function useRouterQuery(returnToTop = false) {
  const history = useHistory();
  const { search, pathname } = useLocation();

  //Récupère les query string et les transforme en objet
  const getParams = useMemo(() => {
    return parse(search, { ignoreQueryPrefix: true, depth: 0 });
  }, [search]);

  //Récupère les paramètres ajoutés (objet) et transforme les anciens et nouveaux paramètres en url
  const setParams = (newParams, changeUrl = true) => {
    const allParams = cloneDeep({ ...getParams, ...newParams });

    // Permet la suppression des clés/valeurs vides si empty string
    for (let i = 0; i < Object.values(newParams).length; i++) {
      if (Object.values(newParams)[i] === "") {
        delete allParams[Object.keys(newParams)[i]];
      }
    }
    const objectToParsedString = stringify(allParams, {
      encode: false,
      indices: false,
    });
    const newUrl = pathname + "?" + objectToParsedString;
    if (changeUrl) {
      history.push(newUrl);
    }

    return newUrl;
  };

  const resetParams = () => {
    return history.push(pathname);
  };

  useEffect(() => {
    if (returnToTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [getParams, returnToTop]);

  return {
    getParams,
    setParams,
    resetParams,
  };
}
