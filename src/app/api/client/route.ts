// app/api/client/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import clientModel from '../../model/clientmodel';
import sendEmail from '../../utiil/email';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// MongoDB connection function
const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(process.env.MONGODB_URI as string);
            console.log('MongoDB Connected successfully');
        } catch (error) {
            console.error('Failed connection:', error);
        }
    }
};

// Get the Client model
const getClientModel = () => {
    return mongoose.models.Client || clientModel;
};

export async function POST(req: NextRequest) {
    await connectDB();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ message: "Incomplete Contact Details" }, { status: 400 });
    }

    try {
        const Client = getClientModel();
        const newClient = await new Client({ name, email, message }).save();
        console.log(newClient);
        await sendEmail.sendEmail(name, email, message);
        return NextResponse.json({ message: "Contact form submitted" }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error);
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
        return NextResponse.json({ message: "An unknown error occurred" }, { status: 500 });
    }
}

export async function OPTIONS() {
    return NextResponse.json({}, { status: 200 });
}
