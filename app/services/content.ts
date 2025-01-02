async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles"] },
      cache: "no-store",
    }
  ).then((response) => response.json());
}

export async function getContent(slug: string) {
  const article = await fetchGraphQL(
    `query {
        faqList(id: "${slug}") {
           nombre
            listCollection{
              items {
                titulo
                cuerpo{
                  json
                }
                imagen{
                  url
                }
              }
            }  
          
        }
      }`
  );
  console.log(article);
  return article;
}

export async function getMonetizacion() {
  const article = await fetchGraphQL(
    `query {
        faqList(id: "3R2GPohgvXc3w0K82g4VhQ") {
           nombre
            listCollection{
              items {
                titulo
                cuerpo{
                  json
                }
                imagen{
                  url
                }
              }
            }  
          
        }
      }`
  );
  console.log({ article });
  return article;
}
