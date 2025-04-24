// app/api/memorials/[accessCode]/relatives/route.ts
import { NextResponse } from "next/server";
import { MemorialModel, RelativesModel } from "@/db/models";
import { startDB } from "@/db/connect";

export async function POST(request, { params }) {
  try {
    const formData = await request.formData();

    const relativeData = {
      name: formData.get("name"),
      relation: formData.get("relation"),
      email: formData.get("email"),
      photo: formData.get("photo"),
      secret: formData.get("secret"),
    };

    // Validation
    if (!relativeData.name || !relativeData.relation) {
      return NextResponse.json(
        { message: "Name and relation are required" },
        { status: 400 }
      );
    }

    if (!relativeData.secret || relativeData.secret !== process.env.RELATIVE_SECRET) {
      return NextResponse.json(
        { message: "Wrong secret code" },
        { status: 400 }
      );
    }

    await startDB();

    // Verify memorial exists
    const memorial = await MemorialModel.findOne({
      accessCode: params.accessCode,
    });

    if (!memorial) {
      return NextResponse.json(
        { message: "Memorial not found" },
        { status: 404 }
      );
    }

    const relative = await RelativesModel.create({
      memorialId: memorial._id,
      ...relativeData,
    });

    return NextResponse.json({
      message: "Relative added successfully",
      data: relative,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error adding relative" },
      { status: 500 }
    );
  }
}
