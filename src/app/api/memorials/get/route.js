// app/api/memorials/[accessCode]/route.ts
import { NextResponse } from "next/server";
import { MemorialModel } from "@/db/models";
import { startDB } from "@/db/connect";

export async function GET(request, { params }) {
  try {
    await startDB();

    const memorial = await MemorialModel.findOne({
      accessCode: params.accessCode,
    }).lean();

    if (!memorial) {
      return NextResponse.json(
        { message: "Memorial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Memorial retrieved successfully",
      data: memorial,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error retrieving memorial" },
      { status: 500 }
    );
  }
}
