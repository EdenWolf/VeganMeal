import { NavBar } from "./Components/NavBar";

export const Layout = ({ children }: any) => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <main>{children}</main>
    </>
  );
};
