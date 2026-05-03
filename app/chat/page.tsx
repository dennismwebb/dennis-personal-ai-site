import Navbar from "@/components/layout/Navbar";
import Chat from "@/components/chat/Chat";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <Navbar />

      <div className="max-w-3xl mx-auto pt-28 pb-24 px-4 h-[calc(100vh-7rem)]">
        <Chat />
      </div>
    </main>
  );
}
