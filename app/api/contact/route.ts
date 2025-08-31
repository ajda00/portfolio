import { NextResponse } from 'next/server';
import { notion } from '../../../lib/notion';

export async function POST(request: Request) {
  try {
    // Log environment variables (without revealing full values)
    console.log('NOTION_TOKEN exists:', !!process.env.NOTION_TOKEN);
    console.log('NOTION_DATABASE_ID exists:', !!process.env.NOTION_DATABASE_ID);
    console.log('NOTION_DATABASE_ID prefix:', process.env.NOTION_DATABASE_ID?.substring(0, 4));
    
    const { name, email, message } = await request.json();
    
    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Validate environment variables
    if (!process.env.NOTION_TOKEN) {
      console.error('NOTION_TOKEN is missing');
      return NextResponse.json(
        { success: false, message: 'Server configuration error: Missing Notion token' },
        { status: 500 }
      );
    }
    
    if (!process.env.NOTION_DATABASE_ID) {
      console.error('NOTION_DATABASE_ID is missing');
      return NextResponse.json(
        { success: false, message: 'Server configuration error: Missing Notion database ID' },
        { status: 500 }
      );
    }

    // Submit to Notion database
    console.log('Attempting to create Notion page with data:', { name, email, messageLength: message.length });
    
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
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
    
    console.log('Notion page created successfully');
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully!' 
    });
    
  } catch (error: any) {
    console.error('Error submitting to Notion:', error);
    
    // Provide more detailed error information
    let errorMessage = 'Failed to submit form. Please try again later.';
    let errorDetails = {};
    
    if (error.code) {
      console.error('Error code:', error.code);
      errorDetails = { code: error.code };
      
      // Handle specific Notion API errors
      if (error.code === 'unauthorized') {
        errorMessage = 'Notion API authorization failed. Please check your integration token.';
      } else if (error.code === 'object_not_found') {
        errorMessage = 'Notion database not found. Please check your database ID.';
      } else if (error.code === 'validation_error') {
        errorMessage = 'Validation error: ' + (error.message || 'Please check your form data.');
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        details: errorDetails
      },
      { status: 500 }
    );
  }
}
