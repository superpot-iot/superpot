"use client";
import { FormEvent, useState, useEffect } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Form() {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }
  
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== repassword) {
      setError("Passwords do not match");
    // } else if { 
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          sessionStorage.setItem("userEmail", email);
          router.push(`/login`);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("Email already in use");
          } else if (error.code === "auth/invalid-email") {
            setError("Invalid email");
          } else if (error.code === "auth/weak-password") {
            setError("Weak password");
          } else {
            setError("Invalid action");
          }
        });
    }
  };

return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
            <div className="flex flex-col">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
        <div className="mb-4">
            <div className="flex flex-col">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Confirm Password"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                />
            </div>
        </div>
        <div className="mb-4">
            {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex justify-between items-center">
            <Link href="/login" className="text-blue-500">Back</Link>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                type="submit"
            >
                R E G I S T E R
            </button>
        </div>
    </form>
);
}
