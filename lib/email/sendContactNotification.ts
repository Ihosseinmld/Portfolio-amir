type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL;
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

export const sendContactNotification = async (
  payload: ContactPayload
): Promise<void> => {
  if (!RESEND_API_KEY || !CONTACT_NOTIFY_EMAIL) {
    console.warn(
      "Contact notification email skipped: RESEND_API_KEY or CONTACT_NOTIFY_EMAIL is missing."
    );
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_NOTIFY_EMAIL],
      reply_to: payload.email,
      subject: `New contact: ${payload.subject}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Subject: ${payload.subject}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Resend returned ${response.status}: ${response.statusText}. ${errorText}`
    );
  }
};

