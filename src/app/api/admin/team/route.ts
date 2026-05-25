import { createClient } from "@supabase/supabase-js";

const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function checkAuth(request: Request) {
  return request.headers.get("x-admin-password") === process.env.ADMIN_PASSWORD;
}

export async function GET(request: Request) {
  if (!checkAuth(request)) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await adminSupabase
    .from("team_members")
    .select("*")
    .order("group_name")
    .order("sort_order");

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ members: data });
}

export async function POST(request: Request) {
  if (!checkAuth(request)) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { name, role, bio, full_bio, avatar, group_name, sort_order, career_start_year } = body;

  const { data, error } = await adminSupabase
    .from("team_members")
    .insert([{ name, role, bio, full_bio, avatar, group_name, sort_order: sort_order ?? 0, career_start_year: career_start_year ?? null }])
    .select()
    .single();

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ member: data }, { status: 201 });
}
