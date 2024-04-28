/**import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signIn}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>

    <div className = "rounded-xl bg-gradient-to-b from-red-900 to-red-750"
          style = {{ width: '55%' , height: '80%', backgroundColor: 'black'}}
          ></div>
  );
}*/

import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import Image from "next/image";
import { poppins } from "../fonts";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="w-full relative bg-background">
      <div className="flex-1 mt-10 ml-10 ">
        <Image width={180} height={50} src="/logos/FRAMES_title-logo.png" alt="" />
      </div>

      
      <div className="flex w-full">
        <div className="pl-20 mt-10" style = {{width: '60%'}}>
          <div className="mt-10 ml-20 ">
            <Image width={500} height={200} src="/logos/books.png" alt="" />
          </div>
        </div>

        <div className={`${poppins.className} flex space-around ml-20 mr-10 mb-20}`} style={{width: '40%'}}>
          <div style={{width: '80%'}}>
          <div>
            <div className = "mt-10 mb-10">
            <h1 style={{fontSize: '40px', fontWeight: '600'}}> HELLO,</h1>
            <h1 style={{fontSize: '40px', fontWeight: '600'}}> WELCOME BACK </h1>
          </div>
          <form className="animate-in flex flex-col justify-center text-foreground gap-3"
                style = {{width: '80%'}}>
            <label className="text-md" htmlFor="username">
              Please sign in to continue
            </label>

            <input
                className="rounded-full border-none text-black mb-1" 
                name="username"
                placeholder="  Username"
                style = {{backgroundColor: '#F7F2F1',
                          height: '45px'
                }}
                required
              />
            <input
              className="rounded-full border-none text-black"
              type="password"
              name="password"
              placeholder="   Password"
              style = {{backgroundColor: '#F7F2F1',
                        height: '45px'
              }}
              required
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="remembermeCheckbox" className="mr-2" />
              <label htmlFor="remembermeCheckbox" className="mt-1 md:mt-0 lg:mt-0" style={{ color: 'gray', fontSize: '15px' }}>Remember me.</label>
            </div>

            <SubmitButton
              formAction={signIn}
              className="bg-green-700 rounded-full px-4 py-2 text-foreground mb-2 mt-5"
              style = {{backgroundColor: '#C30D26' , height: '45px', color: 'white'}}
              pendingText="Signing In..."
            >
              SIGN IN
            </SubmitButton>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}

            <Link href="/">
              <label style={{ color: '#C30D26' }}>Forgot Password?</label> 
            </Link>

            
          </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
