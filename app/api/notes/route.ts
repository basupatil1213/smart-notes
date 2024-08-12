import { NextResponse, NextRequest } from "next/server";
import Note from "@/models/Note";
import { db_config } from "@/config/db-config";


export const GET = async (request: NextRequest) => {

    

    try {
        await db_config();

        const notes = await Note.find();

        return NextResponse.json({
            message: "Notes fetched successfully",
            data: JSON.stringify(notes),
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}


export const POST = async (request: NextRequest) => {
    const requestBody = await request.json();

    if (!requestBody) {
        return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
    }

    const { title, content, user } = requestBody;

    if (!title || !content) {
        return NextResponse.json({ message: "Title, content" }, { status: 400 });
    }

    try {

        await db_config();

        const new_note = new Note({
            title,
            content,
            user
        });

        const note = await new_note.save();

        return NextResponse.json({
            message: "Note created successfully",
            data : JSON.stringify(note),
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}