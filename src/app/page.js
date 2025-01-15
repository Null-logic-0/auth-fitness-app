import AuthForm from "@/components/auth-form";

export default async function Home({ searchParams }) {
  const search = await searchParams;
  const formMode = (await search.mode) || "login";
  return <AuthForm mode={formMode} />;
}
