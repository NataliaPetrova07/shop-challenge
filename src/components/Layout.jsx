import Anchor from "./Anchor";

export default function Layout({ children, navData }) {
  console.log(navData);
  return (
    <>
      <nav>
        {navData.map((obj) => {
          return (
            <Anchor key={obj.id} href={"/products/" + obj.id}>
              {obj.productdisplayname}
            </Anchor>
          );
        })}
      </nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
