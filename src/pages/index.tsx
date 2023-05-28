import { SignInButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CreatePostWizard from "~/components/CreatePostWizard";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

import { type RouterOutputs, api } from "~/utils/api";
import { LoadingPage } from "~/components/Loader";

type PostViewProps = RouterOutputs["posts"]["getAll"][number];
const PostView = ({ post, author }: PostViewProps) => {
  return (
    <div className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        src={author.profileImageUrl}
        alt="User avatar"
        width={50}
        height={50}
        className="h-14 w-14 rounded-full"
      />
      <div className="flex flex-col">
        <div className="flex text-slate-300">
          <span>@{author.username}</span>&nbsp;
          <span> • {dayjs(post.createdAt).fromNow()}</span>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};

const Feed = () => {
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (isLoading) return <LoadingPage />;

  return (
    <div className="flex flex-col">
      {data?.map(({ post, author }) => (
        <PostView key={post.id} post={post} author={author} />
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  if (!userLoaded) return <LoadingPage />;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            {isSignedIn ? (
              <>
                {/* <SignOutButton /> */}
                <CreatePostWizard />
              </>
            ) : (
              <SignInButton />
            )}
          </div>
          <Feed />
        </div>
      </main>
    </>
  );
};

export default Home;
