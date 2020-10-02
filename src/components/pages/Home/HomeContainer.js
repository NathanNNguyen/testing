import React, { useState, useEffect, useMemo } from "react";
import { useOktaAuth } from "@okta/okta-react";

import RenderHomePage from "./RenderHomePage";

function HomeContainer(props) {
  // const { authState, authService } = useOktaAuth();
  // const [userInfo, setUserInfo] = useState(null);
  const {
    userInfo,
    cities,
    comparisonList,
    setComparisonList,
    addCity,
    removeCity,
    isComparing,
    setIsComparing,
    getData
  } = props;
  // eslint-disable-next-line
  // const [memoAuthService] = useMemo(() => [authService], []);

  // useEffect(() => {
  //   let isSubscribed = true;

  //   memoAuthService
  //     .getUser()
  //     .then(info => {
  //       // if user is authenticated we can use the authService to snag some user info.
  //       // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
  //       if (isSubscribed) {
  //         setUserInfo(info);
  //       }
  //     })
  //     .catch(err => {
  //       isSubscribed = false;
  //       return setUserInfo(null);
  //     });
  //   return () => (isSubscribed = false);
  // }, [memoAuthService]);

  return (
    <>
      {/* {!userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )} */}
      {
        <RenderHomePage
          userInfo={userInfo}
          cities={cities}
          comparisonList={comparisonList}
          setComparisonList={setComparisonList}
          addCity={addCity}
          removeCity={removeCity}
          isComparing={isComparing}
          setIsComparing={setIsComparing}
          getData={getData}
        />
      }
    </>
  );
}

export default HomeContainer;
