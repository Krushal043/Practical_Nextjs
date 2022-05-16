import { Fragment } from "react";
import MainHeader from "./MainHeader";

export default function Layout(props) {
  return (
    <Fragment>
      <main>
        <MainHeader />
        {props.children}
      </main>
    </Fragment>
  );
}
