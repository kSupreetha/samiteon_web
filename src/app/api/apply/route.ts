import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { job_title, name, email, phone, portfolio, cover_letter } = await request.json();

    if (!job_title || !name || !email || !cover_letter) {
      return Response.json({ error: "Name, email, job title, and cover letter are required." }, { status: 400 });
    }

    const { error } = await supabase
      .from("job_applications")
      .insert([{ job_title, name, email, phone, portfolio, cover_letter }]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return Response.json({ error: "Failed to submit your application." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
