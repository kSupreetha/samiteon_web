import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { name, email, mobile, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const { error } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, mobile, message }]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return Response.json({ error: "Failed to save your message." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
