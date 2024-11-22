import { Metadata } from "next";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const slug = await props.params;
  return { title: `Post: ${slug.slug}` };
}

export default async function Page(props: Params) {
  const slug = await props.params;
  return (
    <h1>
      Slug: {slug.slug} <p>Sonnguyen</p>
    </h1>
  );
}
