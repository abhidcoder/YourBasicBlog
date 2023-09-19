import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function POST(request) {
  try {
    const { email, password } = request.body;

    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.error("User with this email already exists", {
        status: 409, // Conflict status code
      });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Generate an authentication token for the newly created user
    const authToken = jwt.sign({ _id: newUser._id }, process.env.JWT_KEY);

    // Set the authToken as a cookie or response header, depending on your authentication strategy

    return NextResponse.json({ message: "Signup successful", authToken });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
