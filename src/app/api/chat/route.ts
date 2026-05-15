import OpenAI from "openai";

export const dynamic = "force-dynamic";

function getClient() {
  return new OpenAI({
    apiKey: process.env.GROQ_API_KEY ?? "",
    baseURL: "https://api.groq.com/openai/v1",
  });
}

const SYSTEM_PROMPT = `You are a helpful AI assistant for Samiteon, a leading IT services company based in Chennai, Tamil Nadu, India.

About Samiteon:
- A leading IT services provider that delivers high-impact digital solutions
- Specializes in empowering businesses with innovative IT solutions
- Expertise in Salesforce development, data science, and digital transformation

Services:
- Web Development: Modern, scalable websites and web applications
- App Development: Cross-platform mobile and desktop applications
- Cloud Solutions: Cloud infrastructure, migration, and management
- UI/UX Design: User-centered design for digital products
- Digital Marketing: SEO, campaigns, and online growth strategies
- Software Consulting: Expert guidance on technology decisions

Projects delivered:
- Business websites, mobile apps, cloud dashboards and more
- 50+ projects delivered, 20+ happy clients, 5+ years experience

Careers - Open positions:
- Frontend Developer (Remote, Full-time)
- UI/UX Designer (Hybrid, Full-time)
- Cloud Engineer (Remote, Full-time)
- Digital Marketing Specialist (On-site, Full-time)

Contact:
- Email: hello@samiteon.com
- Location: Chennai, Tamil Nadu, India

Instructions:
- Be friendly, professional, and concise
- Answer questions about Samiteon's services, projects, careers, and contact info
- For anything outside Samiteon's scope, politely redirect to contacting the team
- Keep responses short and to the point (2-4 sentences max)`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const history = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content,
    }));

    const completion = await getClient().chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...history],
    });

    const text = completion.choices[0].message.content ?? "";
    return Response.json({ message: text });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Groq API error:", message);
    return Response.json({ error: `API Error: ${message}` }, { status: 500 });
  }
}
