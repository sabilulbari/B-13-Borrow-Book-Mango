import { auth } from "../../../../lib/auth";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("Borrow-user");

export async function POST(request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Session user:", session.user);
    console.log("Session user ID:", session.user.id);

    const { name, image } = await request.json();

    if (!name && !image) {
      return Response.json({ error: "At least one field (name or image) is required" }, { status: 400 });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (image) updateData.image = image;

    // Update user in database - better-auth uses _id field
    // Try both string and ObjectId formats
    let result = await db.collection("user").updateOne({ _id: session.user.id }, { $set: updateData });

    // If not found, try with ObjectId
    if (result.matchedCount === 0) {
      result = await db.collection("user").updateOne({ _id: new ObjectId(session.user.id) }, { $set: updateData });
    }

    console.log("Update result:", result);

    if (!result || result.matchedCount === 0) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Update profile error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
