import { sendMail } from "@/lib/mail";

export default async function Home() {
  const send = async () => {
    "use server";
    console.log("Sending...");
    await sendMail({
      to: "john@doe.com",
      name: "Mary Doe",
      subject: "Notification",
      body: "<h1>Remember to check your email</h1>",
    });
    console.log("Sent");
  };
  return (
    <main className="flex items-center justify-center h-screen">
      <form>
        <button
          className="bg-blue-500 px-4 py-3 rounded-md hover:bg-blue-500/80"
          formAction={send}
        >
          Click me!
        </button>
      </form>
    </main>
  );
}
