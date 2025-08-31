import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function submitContactForm(name: string, email: string, message: string) {
  try {
    // Make sure you've created a database in Notion and have its ID
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID as string,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        mail: {
          email: email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        // Removed Status and Date properties as they don't exist in your Notion database
      },
    });
    
    return {
      success: true,
      message: "Form submitted successfully!",
      data: response,
    };
  } catch (error) {
    console.error("Error submitting to Notion:", error);
    return {
      success: false,
      message: "Failed to submit form. Please try again later.",
      error,
    };
  }
}
