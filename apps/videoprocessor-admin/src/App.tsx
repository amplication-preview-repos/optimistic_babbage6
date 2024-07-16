import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FrameList } from "./frame/FrameList";
import { FrameCreate } from "./frame/FrameCreate";
import { FrameEdit } from "./frame/FrameEdit";
import { FrameShow } from "./frame/FrameShow";
import { AnalysisResultList } from "./analysisResult/AnalysisResultList";
import { AnalysisResultCreate } from "./analysisResult/AnalysisResultCreate";
import { AnalysisResultEdit } from "./analysisResult/AnalysisResultEdit";
import { AnalysisResultShow } from "./analysisResult/AnalysisResultShow";
import { RequestLogList } from "./requestLog/RequestLogList";
import { RequestLogCreate } from "./requestLog/RequestLogCreate";
import { RequestLogEdit } from "./requestLog/RequestLogEdit";
import { RequestLogShow } from "./requestLog/RequestLogShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Videoprocessor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Frame"
          list={FrameList}
          edit={FrameEdit}
          create={FrameCreate}
          show={FrameShow}
        />
        <Resource
          name="AnalysisResult"
          list={AnalysisResultList}
          edit={AnalysisResultEdit}
          create={AnalysisResultCreate}
          show={AnalysisResultShow}
        />
        <Resource
          name="RequestLog"
          list={RequestLogList}
          edit={RequestLogEdit}
          create={RequestLogCreate}
          show={RequestLogShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
