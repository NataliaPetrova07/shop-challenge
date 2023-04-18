export default function Product({ data }) {
  return (
    <>
      <h1>{data.productdisplayname}</h1>
      <p>Gender: {data.gender}</p>
      <p>Category: {data.category}</p>
      <p>Subcategory: {data.subcategory}</p>
      <p>Articletype: {data.articletype}</p>
      <p>Season: {data.season}</p>
      <p>Production year: {data.productionyear}</p>
      <p>Style: {data.usagetype}</p>
      <p>Price: {data.price}</p>
      {/* <p>{data.discount}</p> */}
      <p>Brand: {data.brandname}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const api = "https://kea-alt-del.dk/t7/api/products/" + id;
  const res = await fetch(api);
  // If no data - no page (404)
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export async function getStaticPaths() {
  const api = "https://kea-alt-del.dk/t7/api/products/";
  const res = await fetch(api);
  const data = await res.json();

  const paths = data.map((object) => {
    console.log(object.id);
    return { params: { id: object.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
